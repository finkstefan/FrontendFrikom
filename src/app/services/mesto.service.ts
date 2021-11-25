import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MESTO_URL } from '../app.constants';
import { Mesto } from '../models/mesto';

@Injectable({
  providedIn: 'root'
})
export class MestoService {

  constructor(private httpClient: HttpClient) { }

  public getAllMesto(): Observable<any> {
    return this.httpClient.get(`${MESTO_URL}`);
    // {headers: new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZXJhcGVyaWMiLCJleHAiOjE2Mzc4Mjk2OTksImlhdCI6MTYzNzc5MzY5OX0.4nTBaSqXxvCQcjjLDnepr8HjtXp_hjU-nfyp9t1N1TI'})}
  }

  public addMesto(mesto: Mesto): Observable<any> {
    mesto.idMesto = 0;
    return this.httpClient.post(`${MESTO_URL}`, mesto);
  }

  public updateMesto(mesto: Mesto): Observable<any> {
    return this.httpClient.put(`${MESTO_URL}`, mesto);
  }

  public deleteMesto(id: number): Observable<any> {
    return this.httpClient.delete(`${MESTO_URL}/${id}`);
  }

}
