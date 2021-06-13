import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { LookupService } from './services/lookup.service';
import { PluginOptions } from './services/plugin';

@Component({
  selector: 'cutomer-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  // @ViewChild('placeHolder', { read: ViewContainerRef, static: true }) viewContainer!: ViewContainerRef;
  @ViewChildren('placeHolder', { read: ViewContainerRef })
  viewContainers!: QueryList<ViewContainerRef>;
  title = 'shell';
  plugins: PluginOptions[] = [];
  widget: PluginOptions[] = [];
  index = 0;
  constructor(
    private lookupService: LookupService,
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) {}
  async ngOnInit(): Promise<void> {
    this.widget = this.lookupService.instantLookup();
  }

  async ngAfterViewInit(): Promise<void> {
    // this.plugins = await this.lookupService.lookup();
    // this.plugins = this.lookupService.instantLookup();

    // throw new Error('Method not implemented.');
    console.log(this.viewContainers);
    for (const vc of this.viewContainers) {
      vc.clear();

      const Component = await loadRemoteModule(this.widget[this.index]).then(
        (m) => m[this.widget[this.index].componentName]
      );

      // Ivy --> ViewEngine
      const factory = this.cfr.resolveComponentFactory(Component);

      const compRef: any = vc.createComponent(
        factory,
        undefined,
        this.injector
      );

      // compRef.instance.pokeEmit.subscribe((e: any) => console.log(e));
      const compInstance = compRef.instance;
      console.log(compInstance);
      // compInstance.title = vc.componentName;
      this.index++;
    }
    // await this.viewContainers.forEach(async (vc, index) => {

    //   vc.clear();

    //   const Component = await loadRemoteModule(this.widget[index]).then(
    //     (m) => m[this.widget[index].componentName]
    //   );

    //   // Ivy --> ViewEngine
    //   const factory = this.cfr.resolveComponentFactory(Component);

    //   const compRef: any = vc.createComponent(
    //     factory,
    //     undefined,
    //     this.injector
    //   );

    //   // compRef.instance.pokeEmit.subscribe((e: any) => console.log(e));
    //   const compInstance = compRef.instance;
    //   console.log(compInstance);
    //   // compInstance.title = vc.componentName;
    // });
  }

  // proba(w: any) {
  //   this.viewContainer.clear();

  //   const Component = await loadRemoteModule(this.options).then(
  //     (m) => m[this.options.componentName]
  //   );

  //   // Ivy --> ViewEngine
  //   const factory = this.cfr.resolveComponentFactory(Component);

  //   const compRef: any = this.viewContainer.createComponent(
  //     factory,
  //     undefined,
  //     this.injector
  //   );

  //   // compRef.instance.pokeEmit.subscribe((e: any) => console.log(e));
  //   const compInstance = compRef.instance;
  //   console.log(compInstance);
  //   compInstance.title = this.options.componentName;
  // }
  add() {
    this.widget = [...this.widget, this.plugins[this.index]];
    this.index += 1;
    // this.widget = [...this.plugins];
  }

  trackByFn(index: number, comp: any) {
    return index + comp.displayName;
  }
}
