import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private token: String;
  public user: User;

  constructor(private httpClient: HttpClient) { 
    // this.user.username = "peraperic";
    // this.user.password = "111";

  }
  
  
  public login(user: User): Observable<any> {
    // user.username = "peraperic";
    // user.password = "111";
    return this.httpClient.post('http://localhost:8080/authenticate', user);
  }

}
