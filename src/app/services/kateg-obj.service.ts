import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KATEG_OBJ_URL } from '../app.constants';
import { KategObj } from '../models/kateg_obj';

@Injectable({
  providedIn: 'root'
})
export class KategObjService {

  constructor(private httpClient: HttpClient) { }

  public getAllKategObj(): Observable<any> {
    return this.httpClient.get(`${KATEG_OBJ_URL}`);
  }

  public addKategObj(kategObj: KategObj): Observable<any> {
    kategObj.idKategObj = 0;
    return this.httpClient.post(`${KATEG_OBJ_URL}`, kategObj);
  }

  public updateKategObj(kategObj: KategObj): Observable<any> {
    return this.httpClient.put(`${KATEG_OBJ_URL}`, kategObj);
  }

  public deleteKategObj(id: number): Observable<any> {
    return this.httpClient.delete(`${KATEG_OBJ_URL}/${id}`);
  }
  
}
