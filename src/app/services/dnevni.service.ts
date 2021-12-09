import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DNEVNI_URL } from '../app.constants';
import { Dnevni } from '../models/dnevni'
import { User } from '../models/user';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class DnevniService {

  private token: String;
  public user: User = {username: 'peraperic', password: '111'};
  //private header: HttpHeaders = new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZXJhcGVyaWMiLCJleHAiOjE2MzkwMDMxMzYsImlhdCI6MTYzODk2NzEzNn0.X5tm7kG9bms-hpV5bzZ77arQ7J-en0ViCOWwyNDPOsQ'});
  private header: HttpHeaders;
  
  constructor(public httpClient: HttpClient, public authorization: AuthorizationService) {
    this.header = new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZXJhcGVyaWMiLCJleHAiOjE2MzkwMDMxMzYsImlhdCI6MTYzODk2NzEzNn0.X5tm7kG9bms-hpV5bzZ77arQ7J-en0ViCOWwyNDPOsQ'});
    //this.header = this.header.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZXJhcGVyaWMiLCJleHAiOjE2MzkwMDMxMzYsImlhdCI6MTYzODk2NzEzNn0.X5tm7kG9bms-hpV5bzZ77arQ7J-en0ViCOWwyNDPOsQ');
  }

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

