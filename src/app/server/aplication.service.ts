import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { map, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AplicationService {

  public stateArr$ = new BehaviorSubject<any>([]);

  constructor(
    private http: HttpClient
  ) { }

  getPersonagens() {
    return this.http.get(`${environment.API}`)
      .pipe(
        map((res: any) => res['results'])
      )
  }

  get currentState() {
    return this.stateArr$.getValue();
  }

  setState(newState: any) {
    let oldState = this.currentState;
    console.log('old', oldState);
    console.log('new', newState);

    if (JSON.stringify(oldState) !== JSON.stringify(newState)) {
      this.stateArr$.next(newState);
    }
  }
}
