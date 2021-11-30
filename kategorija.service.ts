import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KATEGORIJA_URL } from '../app.constants';
import { Kategorija } from '../models/kategorija';

@Injectable({
  providedIn: 'root'
})
export class KategorijaService {

  constructor(private httpClient: HttpClient) { }

public getAllKategorije(): Observable<any>{

  return this.httpClient.get(`${KATEGORIJA_URL}`);
}

public addKategorija(kat: Kategorija): Observable<any> {
  kat.idKategorija = 0;
  return this.httpClient.post(`${KATEGORIJA_URL}`, kat);
}



public updateKategorija(kat: Kategorija): Observable<any> {
return this.httpClient.put(`${KATEGORIJA_URL}`,kat);
}

public deleteKategorija(id:number): Observable<any> {
  return this.httpClient.delete(`${KATEGORIJA_URL}/${id}`);
}

}
