import { Component, OnInit } from '@angular/core';
import { LookupService } from './services/lookup.service';
import { PluginOptions } from './services/plugin';

@Component({
  selector: 'cutomer-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  plugins: PluginOptions[] = [];
  constructor(private lookupService: LookupService) {}
  async ngOnInit(): Promise<void> {
    this.plugins = await this.lookupService.lookup();
  }
}
