import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LANAC_URL } from '../app.constants';
import { Lanac } from '../models/lanac';

@Injectable({
  providedIn: 'root'
})
export class LanacService {

  constructor(private httpClient: HttpClient) { }

  public getAllLanac(): Observable<any> {
    return this.httpClient.get(`${LANAC_URL}`);
  }

  public addLanac(lanac: Lanac): Observable<any> {
    lanac.idLanac = 0;
    return this.httpClient.post(`${LANAC_URL}`, lanac);
  }

  public updateLanac(lanac: Lanac): Observable<any> {
    return this.httpClient.put(`${LANAC_URL}`, lanac);
  }

  public deleteLanac(id: number): Observable<any> {
    return this.httpClient.delete(`${LANAC_URL}/${id}`);
  }

}
