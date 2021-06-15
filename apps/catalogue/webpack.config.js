const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "catalogue",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        name: "catalogue",
        filename: "remoteEntry.js",
        exposes: {
            // './Component': './apps/catalogue/src/app/app.component.ts',
            './Weather': './apps/catalogue/src/app/weather/weather.component.ts',
            './StarWars': './apps/catalogue/src/app/starwars/starwars.component.ts',
            './UserInfo': './apps/catalogue/src/app/user-info/user-info.component.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "shell": "shell@http://localhost:5000/remoteEntry.js",

        // },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true }, 
          "@angular/common": { singleton: true, strictVersion: true }, 
          "@angular/common/http": { singleton: true, strictVersion: true }, 
          "@angular/router": { singleton: true, strictVersion: true },
          "@angular/material": { singleton: true, strictVersion: true},
          
          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin()
  ],
};
