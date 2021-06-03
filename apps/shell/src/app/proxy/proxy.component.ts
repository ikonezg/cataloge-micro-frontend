import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PluginOptions } from '../services/plugin';

@Component({
  selector: 'cutomer-poc-proxy',
  template: '<ng-container #placeHolder></ng-container>',
  styleUrls: ['./proxy.component.css'],
})
export class ProxyComponent implements AfterViewInit {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  @Input() options!: any;
  @Input() indexNum!: number;
  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) {}

  async ngAfterViewInit() {
    this.viewContainer.clear();

    const Component = await loadRemoteModule(this.options).then(
      (m) => m[this.options.componentName]
    );

    // Ivy --> ViewEngine
    const factory = this.cfr.resolveComponentFactory(Component);

    const compRef: any = this.viewContainer.createComponent(
      factory,
      undefined,
      this.injector
    );

    // compRef.instance.pokeEmit.subscribe((e: any) => console.log(e));
    const compInstance = compRef.instance;
    console.log(compInstance);
    compInstance.title = this.options.componentName;
    // compInstance.a = 'xx'
    // compInstance.onChange.subscribe(...)
    // compInstance.m();
  }
}
