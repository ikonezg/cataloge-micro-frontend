import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'cutomer-poc-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  fakeUser$: Observable<any> = this._http
    .get('https://randomuser.me/api/')
    .pipe(
      map((res: any) => res.results[0]),
      tap((res) => console.log(res))
    );

  constructor(private _http: HttpClient) {}
}
