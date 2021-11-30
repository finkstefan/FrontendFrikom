import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JEDMERE_URL } from '../app.constants';
import { JedMere } from '../models/jedmere';

@Injectable({
  providedIn: 'root'
})
export class JedMereService {

  constructor(private httpClient: HttpClient) { }

public getAllJedMere(): Observable<any>{

  return this.httpClient.get(`${JEDMERE_URL}`);
}

public addJedMere(jm: JedMere): Observable<any> {
  jm.idJedMere = 0;
  return this.httpClient.post(`${JEDMERE_URL}`, jm);
}



public updateJedMere(jm: JedMere): Observable<any> {
return this.httpClient.put(`${JEDMERE_URL}`, jm);
}

public deleteJedMere(id:number): Observable<any> {
  return this.httpClient.delete(`${JEDMERE_URL}/${id}`);
}

}
