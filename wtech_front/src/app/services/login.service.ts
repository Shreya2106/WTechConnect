import { Logindata } from './../logindata';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //login - generate token
  public Login(data :Logindata){
    return this.http.post<any>(`${baseUrl}`+'/login',data);
  }

  //change Password
  public changePass(data :Logindata){
    return this.http.post<any>(`${baseUrl}`+'/changePass',data);
  }

  //save token in local storage
  public saveToken(token:string){
    localStorage.setItem('token',token);
    return true;
  }

  //checking whether logged in or not
  public isLoggedIn(){
    let token = localStorage.getItem('token');
    if(token==undefined || token=='' || token==null){
        return false;
    }
    return true;
  }

  //logout -- remove token from localStorage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //fetch token
  public getToken(){
    return localStorage.getItem('token');
  }

  //Setting user details
  public setUser(user: any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  //fetch User
  public getUser(){
    let user = localStorage.getItem('user');
    console.log(user);
    if(user!=null){
      return JSON.parse(user);
    }
  }

  //get user role
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  //get Current User
  public getCurrentUser(){
    return this.http.get(`${baseUrl}`+'/currentUser');
  }
}
