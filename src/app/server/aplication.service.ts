import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AplicationService {

  constructor(
    private http: HttpClient
  ) { }

  getPersonagens() {
    return this.http.get(`${environment.API}`)
      .pipe(
        map((res: any) => res['results'])
      )
  }
}
