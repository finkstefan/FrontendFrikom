import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NIELSEN_URL } from '../app.constants';
import {Nielsen} from '../models/nielsen';

@Injectable({
  providedIn: 'root'
})
export class NielsenService {

  constructor(private httpClient: HttpClient) { }

  public getAllNielsens() : Observable<any> {
    return this.httpClient.get(`${NIELSEN_URL}`);
    
    
}

  public addNielsen(nielsen: Nielsen): Observable<any> 
  {
    nielsen.idNielsen = 0;
    return this.httpClient.post(`${NIELSEN_URL}`, nielsen)

}

public updateNielsen(nielsen: Nielsen): Observable<any> {
  return this.httpClient.put(`${NIELSEN_URL}`, nielsen) 
}

public deleteNielsen(id: number) : Observable<any> {
  return this.httpClient.delete(`${NIELSEN_URL}/${id}`);
  
  
}


}