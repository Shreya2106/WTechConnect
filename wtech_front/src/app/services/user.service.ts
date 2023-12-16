import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /*Fetching Followings's Post */
  public getPostsOfFollowings(){
    var data = this.http.get<any>(`${baseUrl}`+'/user/viewAllPost');
    return data;
  }

  /*Fetching All Leaders the user follows */
  public getFollowings(){
    return this.http.get<any>(`${baseUrl}`+'/user/myFollowings');
  }

  /*Checking whether following or not */
  public follow(id:number){
    return this.http.request('POST',`${baseUrl}/user/leaderfollow/${id}`);
  }

  /*Fetching User Details */
  public getUserDetails(email:any){
    var data = this.http.get<any>(`${baseUrl}`+'/user/userDetails/'+email);
    return data;
  }

  /*Updating User Contact */
  public updateContact(contact:any){
    var data = this.http.request<any>('PUT',`${baseUrl}`+'/user/ContactUp/'+contact);
    return data;
  }

  /*Updating User Skill */
  public updateSkill(skill:any){
    var data = this.http.request<any>('PUT',`${baseUrl}`+'/user/SkillUp/'+skill);
    return data;
  }

  /*Updating User Industry */
  public updateIndustry(ind:any){
    var data = this.http.request<any>('PUT',`${baseUrl}`+'/user/IndustryUp/'+ind);
    return data;
  }

  /*Updating User Location */
  public updateLocation(loc:any){
    var data = this.http.request<any>('PUT',`${baseUrl}`+'/user/LocationUp/'+loc);
    return data;
  }

  /* Get All Updates */
  public getUpdates(){
    var data = this.http.get<any>(`${baseUrl}`+'/user/getAllNotifs');
    return data;
  }

  /* Delete All Updates */
  public delUpdates(){
    var data = this.http.delete<any>(`${baseUrl}`+'/user/deleteNotifs');
    return data;
  }


}
