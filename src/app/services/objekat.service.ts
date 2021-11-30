import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OBJEKAT_URL } from '../app.constants';
import { Objekat } from '../models/objekat';

@Injectable({
  providedIn: 'root'
})
export class ObjekatService {

  constructor(private httpClient: HttpClient) { }

  public getAllObjekat(): Observable<any> {
    return this.httpClient.get(`${OBJEKAT_URL}`);
  }

  public addObjekat(objekat: Objekat): Observable<any> {
    objekat.idObjekat = 0;
    return this.httpClient.post(`${OBJEKAT_URL}`, objekat);
  }

  public updateObjekat(objekat: Objekat): Observable<any> {
    return this.httpClient.put(`${OBJEKAT_URL}`, objekat);
  }

  public deleteObjekat(id: number): Observable<any> {
    return this.httpClient.delete(`${OBJEKAT_URL}/${id}`);
  }

}
