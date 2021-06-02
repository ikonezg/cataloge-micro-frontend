import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PluginOptions } from '../services/plugin';

@Component({
  selector: 'cutomer-poc-proxy',
  template: '<ng-container #placeHolder></ng-container>',
  styleUrls: ['./proxy.component.css'],
})
export class ProxyComponent implements OnChanges {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  @Input() options!: PluginOptions;

  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) {}

  async ngOnChanges() {
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

    compRef.instance.pokeEmit.subscribe((e: any) => console.log(e));
  }
}
