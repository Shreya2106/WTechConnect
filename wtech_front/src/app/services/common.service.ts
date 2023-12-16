import { Registerdata } from './../registerdata';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  //fetching skills list
  public fetchSkills(){
    return this.http.get<any>(baseUrl+'/common/skills');
  }

  //fetching locations list
  public fetchLocations(){
    return this.http.get<any>(baseUrl+'/common/locations');
  }

  //fetching industry list
  public fetchIndustry(){
    return this.http.get<any>(baseUrl+'/common/industry');
  }

  //register User
  public registerUser(data:Registerdata){
    return this.http.post<any>(baseUrl+'/common/registerUser',data);
  }

  //register Leader
  public registerLeader(data:Registerdata){
    return this.http.post<any>(baseUrl+'/common/registerleader',data);
  }

  /*Fetching Post By Id*/
  public postById(id:number){
    return this.http.get<Post>(baseUrl+'/common/viewPostById/'+id);
  }

  /*Fetching Leader By Id */
  public getLeaderById(id:number){
    return this.http.get<any>(baseUrl+'/user/common/viewLeaderById/'+id);
  }

  /*Fetching User By Id */
  public getUserById(id:number){
    return this.http.get<any>(baseUrl+'/user/common/getUserById/'+id);
  }

  /*Get Leader Id from leader name */
  public getLeaderIdByName(name:any){
    return this.http.get<number>(baseUrl+'/common/viewLeaderIdByName/'+name);
  }

  /*Get Leader Name from leader id */
  public getLeaderNameById(id:any){
    return this.http.get<any>(baseUrl+'/common/viewLeaderNameById/'+id);
  }

  /*Fetching Post By Leader Id */
  public postByLeaderId(id:any){
    return this.http.get<any>(baseUrl+'/common/getLeadersPost/'+id);
  }

  /*Fetching All Users that follow a particular leader */
  public getFollowersByLeadId(id:number){
    return this.http.get<any>(`${baseUrl}`+'/user/common/getFollowersbyId/'+id);
  }

  /*Get Leader Name from leader id */
  public getUserNameById(id:any){
    return this.http.get<any>(baseUrl+'/common/viewUserNameById/'+id);
  }

  /*Fetching All Users that follow a particular leader */
  public getFollowingsByUserId(id:number){
    return this.http.get<any>(`${baseUrl}`+'/user/common/getFollowingsbyId/'+id);
  }

}