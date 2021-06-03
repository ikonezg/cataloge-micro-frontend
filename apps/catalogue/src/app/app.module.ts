import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { StarwarsComponent } from './starwars/starwars.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, WeatherComponent, StarwarsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
