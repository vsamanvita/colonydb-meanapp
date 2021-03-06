import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getHomesByColonyIdAndWing(doc){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post<any>('homes/home', doc, {headers: headers});
  }

  insertHome(home){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post<any>('homes/addhome', home, {headers: headers});      
  }
}
