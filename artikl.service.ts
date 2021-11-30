import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ARTIKL_URL } from '../app.constants';
import { Artikl } from '../models/artikl';

@Injectable({
  providedIn: 'root'
})
export class ArtiklService {

  constructor(private httpClient: HttpClient) { }

public getAllArtikli(): Observable<any>{

  return this.httpClient.get(`${ARTIKL_URL}`);
}

public addArtikl(ar: Artikl): Observable<any> {
  ar.idArtikl = 0;
  return this.httpClient.post(`${ARTIKL_URL}`, ar);
}



public updateArtikl(ar: Artikl): Observable<any> {
return this.httpClient.put(`${ARTIKL_URL}`, ar);
}

public deleteArtikl(id:number): Observable<any> {
  return this.httpClient.delete(`${ARTIKL_URL}/${id}`);
}

}
