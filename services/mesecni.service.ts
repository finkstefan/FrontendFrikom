import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MESECNI_URL } from '../app.constants';
import { Mesecni } from '../models/mesecni';

@Injectable({
  providedIn: 'root'
})
export class MesecniService {

  constructor(public httpClient: HttpClient) { }

  public getAllMesecni() : Observable<any> {
    return this.httpClient.get(`${MESECNI_URL}`)

  }

  public addMesecni(mesecni: Mesecni) : Observable<any> {
    mesecni.idMesecni = 0;
    return this.httpClient.post(`${MESECNI_URL}`, mesecni); 
  }

  public updateMesecni(mesecni: Mesecni) : Observable<any> {
    
    return this.httpClient.put(`${MESECNI_URL}`, mesecni); 
  }

  public deleteMesecni(id: number) : Observable<any> {
  
    return this.httpClient.delete(`${MESECNI_URL}/${id}`); 
  }




}
