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
    // this.authorization.login(this.user).subscribe(data => {
    //   this.token = data.jwt;
    //   console.log(data);
    //   header = header.append('Content-Type', 'application/json');
    //   header = header.append('Authorization', 'Bearer ' + this.token);
    //   header = header.append('Access-Control-Allow-Origin', '*');
    //   console.log(header);
    // });
    //header = header.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    //header = header.append('Content-Type', 'application/json');
    let header = new HttpHeaders();
    console.log(localStorage.getItem('token'));
    header = header.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZXJhcGVyaWMiLCJleHAiOjE2MzgzODcwNjYsImlhdCI6MTYzODM1MTA2Nn0.wjtpke1jcAqbVlo7znUwEGVM8bd--Gj2q8lw8V7N3Nc');
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

