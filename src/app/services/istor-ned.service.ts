import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISTOR_NED } from '../app.constants';
import { IstorNed } from '../models/istor_ned';

@Injectable({
  providedIn: 'root'
})
export class IstorNedService {

  constructor(private httpClient: HttpClient) { }

  public getAllIstorNed(): Observable<any> {
    return this.httpClient.get(`${ISTOR_NED}`);
  }

  public addIstorNed(istorNed:IstorNed): Observable<any> {
    istorNed.idIstorNed = 0;
    return this.httpClient.post(`${ISTOR_NED}`, istorNed);
  }

  public updateIstorNed(istorNed:IstorNed): Observable<any> {
  return this.httpClient.put(`${ISTOR_NED}`, istorNed);
  }

  public deleteIstorNed(id:number): Observable<any> {
    return this.httpClient.delete(`${ISTOR_NED}/${id}`);
  }

}
