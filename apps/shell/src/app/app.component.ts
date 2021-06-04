import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LookupService } from './services/lookup.service';
import { PluginOptions } from './services/plugin';

@Component({
  selector: 'cutomer-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'shell';
  plugins: PluginOptions[] = [];
  widget: PluginOptions[] = [];
  index = 0;
  constructor(private lookupService: LookupService) {}
  async ngOnInit(): Promise<void> {}

  async ngAfterViewInit(): Promise<void> {
    // this.plugins = await this.lookupService.lookup();
    this.plugins = this.lookupService.instantLookup();
    // this.widget = this.lookupService.instantLookup();

    // throw new Error('Method not implemented.');
  }
  add() {
    this.widget = [...this.widget, this.plugins[this.index]];
    this.index += 1;
    // this.widget = [...this.plugins];
  }

  trackByFn(index: number, comp: any) {
    return index + comp.displayName;
  }
}
