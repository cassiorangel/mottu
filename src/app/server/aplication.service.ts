import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AplicationService {

  constructor(
    private http: HttpClient
  ) { }

  getPersonagens() {
    return this.http.get(`${environment.API}`)
  }
}
