import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { map, BehaviorSubject, Observable } from 'rxjs';
import { Result } from '../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class AplicationService {
  private _todo$ = new BehaviorSubject<Result[]>([]);
  readonly todos$ = this._todo$.asObservable();

  private todos: Result[] = [];

  constructor(private http: HttpClient) {}

  getPersonagens(name?: string) {
    if (name) {
      return this.listPersonagem(`${environment.API}/?name=${name}`);
    }
    return this.listPersonagem(`${environment.API}`);
  }

  listPersonagem(url: string): Observable<Result[]> {
    return this.http
      .get<Result[]>(`${url}`)
      .pipe(map((res: any) => res['results']));
  }

  create(item: Result) {
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
