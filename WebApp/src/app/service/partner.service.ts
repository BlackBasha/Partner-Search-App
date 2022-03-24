import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { PartnerDataDto } from '../model/partner.model';

@Injectable()
export class PartnerService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/users/';

  search(searchPayLoad) : Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.http.post<any>('http://localhost:62237/api/Partner/Search', searchPayLoad,{headers: headers});
    
  }

  upload(data) : Observable<void> {

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    const obj = JSON.parse(data);
    return this.http.post<void>('http://localhost:62237/api/Partner/Upload', obj,{headers: headers});
    
  }
}
