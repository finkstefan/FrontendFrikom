import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISTOR_DNE } from '../app.constants';
import { IstorDne } from '../models/istor_dne';

@Injectable({
  providedIn: 'root'
})
export class IstorDneService {

  constructor(private httpClient: HttpClient) { }

  public getAllIstorDne(): Observable<any> {
    return this.httpClient.get(`${ISTOR_DNE}`);
  }

  public addIstorDne(istorDne:IstorDne): Observable<any> {
    istorDne.idIstorDne = 0;
    return this.httpClient.post(`${ISTOR_DNE}`, istorDne);
  }

  public updateIstorDne(istorDne:IstorDne): Observable<any> {
  return this.httpClient.put(`${ISTOR_DNE}`, istorDne);
  }

  public deleteIstorDne(id:number): Observable<any> {
    return this.httpClient.delete(`${ISTOR_DNE}/${id}`);
  }

}
