import { Injectable } from '@angular/core';
import { PluginOptions } from './plugin';
@Injectable({
  providedIn: 'root',
})
export class LookupService {
  lookup(): Promise<PluginOptions[]> {
    return Promise.resolve([
      {
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'catalogue',
        exposedModule: './UserInfo',

        displayName: 'UserInfo',
        componentName: 'UserInfoComponent',
      },
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
      //   remoteEntry: 'http://localhost:5001/remoteEntry.js',
      //   remoteName: 'clientCatalogue',
      //   exposedModule: './ClientCatalogue',

      //   displayName: 'ClientCatalogue',
      //   componentName: 'AppComponent',
      // },
    ] as PluginOptions[]);
  }

  instantLookup(): PluginOptions[] {
    return [
      {
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'catalogue',
        exposedModule: './UserInfo',

        displayName: 'UserInfo',
        componentName: 'UserInfoComponent',
      },
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
      {
        remoteEntry: 'http://localhost:5001/remoteEntry.js',
        remoteName: 'clientCatalogue',
        exposedModule: './ClientCatalogue',

        displayName: 'ClientCatalogue',
        componentName: 'AppComponent',
      },
    ];
  }
}
