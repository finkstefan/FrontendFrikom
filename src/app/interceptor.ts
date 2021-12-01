import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.token; 

    // if (!token) {
    //   return next.handle(req);
    // }

    // let header = new HttpHeaders();
    // header = header.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZXJhcGVyaWMiLCJleHAiOjE2MzgzODcwNjYsImlhdCI6MTYzODM1MTA2Nn0.wjtpke1jcAqbVlo7znUwEGVM8bd--Gj2q8lw8V7N3Nc');


    const req1 = req.clone({
      //headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))  
     // headers: header
      });

    return next.handle(req1);
  }

}