import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Post__ } from '../Post__';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient) { }

  /*Fetching All Leaders*/
  public getAllLeaders(){
    return this.http.get<any>(`${baseUrl}`+'/user/common/viewAllLeaders');
  }

  /*Fetching All Users*/
  public getAllUser(){
    console.log("here");
    return this.http.get<any>(`${baseUrl}`+'/user/common/viewAllUsers');
  }

  /*Fetching Leader By Id*/
  public getLeaderById(id:number){
    return this.http.get<any>(`${baseUrl}`+'/user/common/viewLeaderById/'+id);
  }

  /*Fetching Leader By Id*/
  public getUserById(id:number){
    var d= this.http.get<any>(`${baseUrl}/user/common/getUserById/${id}`);
    console.log("Here  "+d);
    return d;
  }

  /*Fetching Leader By Skill*/
  public getLeaderBySkill(id:number){
    return this.http.get<any>(`${baseUrl}`+'/user/common/viewLeaderBySkill/'+id);
  }

  /*Fetching Leader By Industry*/
  public getLeaderByIndustry(id:number){
    return this.http.get<any>(`${baseUrl}`+'/user/common/viewLeaderByIndustry/'+id);
  }

  /*Fetching Leader By Location*/
  public getLeaderByLocation(id:number){
    return this.http.get<any>(`${baseUrl}`+'/user/common/viewLeaderByLocation/'+id);
  }

  /*Fetching User By Skill*/
  public getUserBySkill(id:number){
    return this.http.get<any>(`${baseUrl}`+'/user/common/viewUserBySkill/'+id);
  }

  /*Fetching User By Industry*/
  public getUserByIndustry(id:number){
    return this.http.get<any>(`${baseUrl}`+'/user/common/viewUserByIndustry/'+id);
  }

  /*Fetching User By Location*/
  public getUserByLocation(id:number){
    return this.http.get<any>(`${baseUrl}`+'/user/common/viewUserByLocation/'+id);
  }

  /*Fetching All Users that follow the leader user */
  public getFollowers(){
    return this.http.get<any>(`${baseUrl}`+'/leader/myFollowers');
  }

  /*Fetching All Post*/
  public getAllPosts(){
    return this.http.get<any>(baseUrl+'/leader/getAllPost/');
  }

  /*Fetching All Posts of the logged leader*/
  public myPosts(){
    return this.http.get<any>(baseUrl+'/leader/myPosts/');
  }

  /*Adding a post */
  public addPost(post: Post__) {
    return this.http.post<any>(baseUrl+'/leader/addPost',post);
  }

  /*Delete a post */
  public deletePost(id:number) {
    return this.http.delete<any>(baseUrl+'/leader/deletePost/'+id);
  }

  /*Updating Leader Contact */
  public updateContact(contact:any){
    var data = this.http.request<any>('PUT',`${baseUrl}`+'/leader/ContactUp/'+contact);
    return data;
  }

  /*Updating Leader Skill */
  public updateSkill(skill:any){
    var data = this.http.request<any>('PUT',`${baseUrl}`+'/leader/SkillUp/'+skill);
    return data;
  }

  /*Updating Leader Industry */
  public updateIndustry(ind:any){
    var data = this.http.request<any>('PUT',`${baseUrl}`+'/leader/IndustryUp/'+ind);
    return data;
  }

  /*Updating Leader Location */
  public updateLocation(loc:any){
    var data = this.http.request<any>('PUT',`${baseUrl}`+'/leader/LocationUp/'+loc);
    return data;
  }

  /*Fetching Leader Details */
  public getUserDetails(email:any){
    var data = this.http.get<any>(`${baseUrl}`+'/leader/leaderDetails/'+email);
    return data;
  }

  /* Delete Industry */
  public deleteIndustry(id:number){
    return this.http.delete(`${baseUrl}/leader/industry/`+id);
 }

  public addIndustry(id:any){
    return this.http.post(baseUrl+'/leader/addIndustry',id);
 }
  public editIndustry(ind:any,id:any){
    return this.http.post(baseUrl+`/leader/editIndustry/${id}`,ind);
  }

 /* Delete Skill*/
 public deleteSkill(id:number){
    return this.http.delete(`${baseUrl}/leader/skill/`+id);
  }

  public addSkill(id:any){
    return this.http.post(baseUrl+'/leader/addSkill',id);
  }
  public editSkill(skill:any,id:any){
    return this.http.post(baseUrl+`/leader/editSkill/${id}`,skill);
  }

  /* Delete Location*/
  public deleteLocation(id:number){
    return this.http.delete(`${baseUrl}/leader/location/`+id);
  }

  /* Add Location */
  public addLocation(id:any){
    return this.http.post(baseUrl+'/leader/addLocation',id);
  }

  /* Edit Location */
  public editLocation(loc:any,id:any){
    return this.http.post(baseUrl+`/leader/editLocation/${id}`,loc);
  }


  /* Get All Updates */
  public getUpdates(){
    var data = this.http.get<any>(`${baseUrl}`+'/leader/getAllNotifs');
    return data;
  }

  /* Delete All Updates */
  public delUpdates(){
    var data = this.http.delete<any>(`${baseUrl}`+'/leader/deleteNotifs');
    return data;
  }
}

