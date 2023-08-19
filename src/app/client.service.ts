import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = "http://localhost:8981/api/v1";

  constructor(private httpClient: HttpClient) { }

  getClientList(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.baseUrl + '/clients');
  }

  deleteClient(id: number): Observable<Object>{
    return this.httpClient.delete(this.baseUrl + '/delete/' + 'id');
  }

  createClient(client: Client): Observable<Object> {
    return this.httpClient.post(this.baseUrl + '/save',client);
  }

}
