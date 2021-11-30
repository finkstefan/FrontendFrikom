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
    // {headers: new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZXJhcGVyaWMiLCJleHAiOjE2Mzc4OTI2MTIsImlhdCI6MTYzNzg1NjYxMn0.Ztc_EwMxZoEFDULeMokgHDhuoRHoLZlZh4D7DvvtQW8'})}
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
