import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VRSTAAMBAL_URL } from '../app.constants';
import { VrstaAmbal } from '../models/vrstaambal';

@Injectable({
  providedIn: 'root'
})
export class VrstaAmbalService {

  constructor(private httpClient: HttpClient) { }

public getAllVrsteAmbal(): Observable<any>{

  return this.httpClient.get(`${VRSTAAMBAL_URL}`);
}

public addVrstaAmbal(va: VrstaAmbal): Observable<any> {
  va.idVrstaAmbalaze = 0;
  return this.httpClient.post(`${VRSTAAMBAL_URL}`, va);
}



public updateVrstaAmbal(va: VrstaAmbal): Observable<any> {
return this.httpClient.put(`${VRSTAAMBAL_URL}`, va);
}

public deleteVrstaAmbal(id:number): Observable<any> {
  return this.httpClient.delete(`${VRSTAAMBAL_URL}/${id}`);
}

}
