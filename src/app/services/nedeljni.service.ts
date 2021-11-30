import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NEDELJNI_URL } from '../app.constants';
import {Nedeljni} from '../models/nedeljni';

@Injectable({
  providedIn: 'root'
})
export class NedeljniService {

  constructor(private httpClient: HttpClient) { }

  public getAllNedeljni() : Observable<any> {
    return this.httpClient.get(`${NEDELJNI_URL}`)
    //u smer komponenti ce se ispisati ovi podaci 
    
}
  //ovo je metoda koja iscitava sve smerove, a pozivace onu metodu
  //sa bekenda 
  //obzervabla vraca neki tok podataka, a mi cemo moci da se prijavimo
  //na taj tok podataka 

  //pravimo metodu koja ce dodavati novi smer 
  public addNedeljni(nedeljni: Nedeljni): Observable<any> 
  {
    nedeljni.idNedeljni = 0;
    return this.httpClient.post(`${NEDELJNI_URL}`, nedeljni)
//sad mozrmo pozvati iz dijalog komponente
}

public updateNedeljni(smer: Nedeljni): Observable<any> {
  return this.httpClient.put(`${NEDELJNI_URL}`, smer) 
}
//prosledjuje se samo ID smera koji brisemo, i razlicita je putanja na kojoj se izvrsava delete metoda 
public deleteNedeljni(id: number) : Observable<any> {
  return this.httpClient.delete(`${NEDELJNI_URL}/${id}`);
  //PAZI KAKO PROSLEDJUJES OVAJ ID 
  
}


}
