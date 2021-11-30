import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISTOR_NIEL_URL } from '../app.constants';
import { IstorNiel } from '../models/istor_niel';

@Injectable({
  providedIn: 'root'
})
export class IstorNielService {

  constructor(private httpClient: HttpClient) { }

  public getAllIstorNiel(): Observable<any>{

    return this.httpClient.get(`${ISTOR_NIEL_URL}`);
  }

  public addIstorNiel(istorNiel: IstorNiel): Observable<any> {
    istorNiel.idIstorNiel = 0;
    return this.httpClient.post(`${ISTOR_NIEL_URL}`, istorNiel);
  }

  public updateIstorNiel(istorNiel: IstorNiel): Observable<any> {
  return this.httpClient.put(`${ISTOR_NIEL_URL}`, istorNiel);
  }

  public deleteIstorNiel(id: number): Observable<any> {
    return this.httpClient.delete(`${ISTOR_NIEL_URL}/${id}`);
  }

}
