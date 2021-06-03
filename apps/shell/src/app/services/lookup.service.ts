import { Injectable } from '@angular/core';
import { PluginOptions } from './plugin';
@Injectable({
  providedIn: 'root',
})
export class LookupService {
  lookup(): Promise<PluginOptions[]> {
    return Promise.resolve([
      // {
      //   remoteEntry: 'http://localhost:5000/remoteEntry.js',
      //   remoteName: 'micro1',
      //   exposedModule: './Pokemon',

      //   displayName: 'Pokemon',
      //   componentName: 'PokemonComponent',
      // },
      // {
      //   remoteEntry: 'http://localhost:5000/remoteEntry.js',
      //   remoteName: 'micro1',
      //   exposedModule: './Weather',

      //   displayName: 'Weather',
      //   componentName: 'WeatherComponent',
      // },
      {
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'catalogue',
        exposedModule: './Weather',

        displayName: 'Weather',
        componentName: 'WeatherComponent',
      },
      {
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'catalogue',
        exposedModule: './StarWars',

        displayName: 'StarWars',
        componentName: 'StarwarsComponent',
      },
      // {
      //     remoteEntry: 'http://localhost:3000/remoteEntry.js',
      //     remoteName: 'mfe1',
      //     exposedModule: './Upload',

      //     displayName: 'Upload',
      //     componentName: 'UploadComponent'
      // },
      // {
      //     remoteEntry: 'http://localhost:3001/remoteEntry.js',
      //     remoteName: 'mfe2',
      //     exposedModule: './Analyze',

      //     displayName: 'Analyze',
      //     componentName: 'AnalyzeComponent'
      // },
      // {
      //     remoteEntry: 'http://localhost:3001/remoteEntry.js',
      //     remoteName: 'mfe2',
      //     exposedModule: './Enrich',

      //     displayName: 'Enrich',
      //     componentName: 'EnrichComponent'
      // }
    ] as PluginOptions[]);
  }
}
