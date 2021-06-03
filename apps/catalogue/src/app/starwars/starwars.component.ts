import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface StarWarsCharacter {
  name: string;
  gender: string;
  height: string;
}

export interface StarWarsPage {
  count: number;
  next: string;
  previous: string;
  results: StarWarsCharacter[];
}
@Component({
  selector: 'cutomer-poc-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss'],
})
export class StarwarsComponent {
  accessToken = '10225012078866662';
  currentUrl = `https://swapi.dev/api/people/?page=1`;
  page$: Observable<StarWarsPage>;
  displayedColumns = ['name', 'gender', 'height'];
  constructor(private http: HttpClient) {
    this.page$ = this.http.get<StarWarsPage>(this.currentUrl);
  }
}
