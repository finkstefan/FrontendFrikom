import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISTOR_MES } from '../app.constants';
import { IstorMes } from '../models/istor_mes';

@Injectable({
  providedIn: 'root'
})
export class IstorMesService {

  constructor(private httpClient: HttpClient) { }

  public getAllIstorMes(): Observable<any> {
    return this.httpClient.get(`${ISTOR_MES}`);
  }

  public addIstorMes(istorMes:IstorMes): Observable<any> {
    istorMes.idIstorMes = 0;
    return this.httpClient.post(`${ISTOR_MES}`, istorMes);
  }

  public updateIstorMes(istorMes:IstorMes): Observable<any> {
  return this.httpClient.put(`${ISTOR_MES}`, istorMes);
  }

  public deleteIstorMes(id:number): Observable<any> {
    return this.httpClient.delete(`${ISTOR_MES}/${id}`);
  }

}
