import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: String = "https://localhost:7005/userapi/User/";

  constructor( private http: HttpClient) { }

signUp(userObj: any){
  return this.http.post<any>(`${this.baseUrl}register` ,userObj);
}

login(loginObj: any){
  return this.http.post<any>(`${this.baseUrl}authenticate` ,loginObj);
}

}
