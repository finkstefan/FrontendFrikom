import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISTOR_CENA } from '../app.constants';
import { IstorCena } from '../models/istor_cena';

@Injectable({
  providedIn: 'root'
})
export class IstorCenaService {

  constructor(private httpClient: HttpClient) { }

  public getAllIstorCena(): Observable<any> {
    return this.httpClient.get(`${ISTOR_CENA}`);
  }

  public addIstorCena(istorCena:IstorCena): Observable<any> {
    istorCena.idIstorCena = 0;
    return this.httpClient.post(`${ISTOR_CENA}`, istorCena);
  }

  public updateIstorCena(istorCena:IstorCena): Observable<any> {
  return this.httpClient.put(`${ISTOR_CENA}`, istorCena);
  }

  public deleteIstorCena(id:number): Observable<any> {
    return this.httpClient.delete(`${ISTOR_CENA}/${id}`);
  }

}
