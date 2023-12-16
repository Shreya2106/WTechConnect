import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  //add User
  public addUser(user:any){
    return this.http.post(baseUrl+'/common/registerUser',user);
  }

  //addLeader
  public addLeader(user:any){
    return this.http.post(baseUrl+'/common/registerLeader',user);
  }
}