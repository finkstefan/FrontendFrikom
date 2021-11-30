import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DNEVNI_URL } from '../app.constants';
import { Dnevni } from '../models/dnevni'

@Injectable({
  providedIn: 'root'
})
export class DnevniService {

  constructor(public httpClient: HttpClient) { }

  public getAllDnevni(): Observable<any> {
    
    return this.httpClient.get(`${DNEVNI_URL}`);
   
  }

  public addDnevni(dnevni: Dnevni): Observable<any> {
    dnevni.idDnevni = 40;
    return this.httpClient.post(`${DNEVNI_URL}`, dnevni);
  }

  public updateDnevni(dnevni: Dnevni): Observable<any> {
    return this.httpClient.put(`${DNEVNI_URL}`, dnevni);
  }

  public deleteDnevni(id: number): Observable<any> {
    return this.httpClient.delete(`${DNEVNI_URL}/${id}`);
  }
  
}
