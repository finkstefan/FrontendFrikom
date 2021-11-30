import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DATUM_URL } from '../app.constants';
import { Datum } from '../models/datum';

@Injectable({
  providedIn: 'root'
})
export class DatumService {

  constructor(public httpClient: HttpClient) { }

  public getAllDatum() : Observable<any> {
    return this.httpClient.get(`${DATUM_URL}`)

  }

  public addDatum(datum: Datum) : Observable<any> {
    datum.idDatum = 0;
    return this.httpClient.post(`${DATUM_URL}`, datum); 
  }

  public updateDatum(datum: Datum) : Observable<any> {
    
    return this.httpClient.put(`${DATUM_URL}`, datum); 
  }

  public deleteDatum(id: number) : Observable<any> {
  
    return this.httpClient.delete(`${DATUM_URL}/${id}`); 
  }




}
