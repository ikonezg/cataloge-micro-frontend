import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { StarwarsComponent } from './starwars/starwars.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent, WeatherComponent, StarwarsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
