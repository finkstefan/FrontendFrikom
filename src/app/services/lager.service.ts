import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LAGER_URL } from '../app.constants';
import { Lager } from '../models/lager';

@Injectable({
  providedIn: 'root'
})
export class LagerService {

  constructor(private httpClient: HttpClient) { }

  public getAllLager(): Observable<any> {
    return this.httpClient.get(`${LAGER_URL}`);
  }

  public addLager(lager: Lager): Observable<any> {
    lager.idLager = 0;
    return this.httpClient.post(`${LAGER_URL}`, lager);
  }

  public updateLager(lager: Lager): Observable<any> {
    return this.httpClient.put(`${LAGER_URL}`, lager);
  }

  public deleteLager(id: number): Observable<any> {
    return this.httpClient.delete(`${LAGER_URL}/${id}`);
  }

}
