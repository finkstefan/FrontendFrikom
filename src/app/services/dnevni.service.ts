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
  //private headers: HttpHeaders;

  constructor(public httpClient: HttpClient, public authorization: AuthorizationService) {
    
  }

  public getAllDnevni(): Observable<any> {
    let header = new HttpHeaders();
    // this.authorization.login(this.user).subscribe(data => {
    //   this.token = data.jwt;
    //   console.log(data);
    //   header = header.append('Content-Type', 'application/json');
    //   header = header.append('Authorization', 'Bearer ' + this.token);
    //   header = header.append('Access-Control-Allow-Origin', '*');
    //   console.log(header);
    // });
    header = header.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZXJhcGVyaWMiLCJleHAiOjE2MzgzMzMyODEsImlhdCI6MTYzODI5NzI4MX0.zetvXcVa3LhQJoTpuPMyBilgCypxDfgdy5NXmJSnixk');
    console.log(header);
    return this.httpClient.get(`${DNEVNI_URL}`, {headers: header});
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

