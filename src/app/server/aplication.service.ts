import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { map, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AplicationService {
  private _todo$ = new BehaviorSubject<any[]>([]);
  readonly todos$ = this._todo$.asObservable();

  private todos: any[] = [];
  private nextId = 0;

  constructor(private http: HttpClient) {}

  getPersonagens(name?: string) {
    if (name) {
      return this.listPersonagem(`${environment.API}/?name=${name}`);
    }
    return this.listPersonagem(`${environment.API}`);
  }

  listPersonagem(url: string) {
    return this.http.get(`${url}`).pipe(map((res: any) => res['results']));
  }

  create(item: any) {
    //Update database
    this.todos.push(item);

    var reduced: any = [];

    this.todos.forEach((item) => {
      var duplicated =
        reduced.findIndex((redItem: any) => {
          return item.id == redItem.id;
        }) > -1;

      if (!duplicated) {
        reduced.push(item);
      }
    });

    //console.log(Object.assign([], reduced));

    this._todo$.next(Object.assign([], reduced));
  }

  remove(id: number) {
    this.todos.forEach((t, i) => {
      if (t.id === id) {
        this.todos.splice(i, 1);
      }
      this._todo$.next(Object.assign([], this.todos));
    });
  }
}
