import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent{

  hide = true;
  display = false;
  public all:boolean = true;
  public follow:boolean = false;
  public post:boolean = false;
  public filterPost:boolean = false;
  public postId!: number;
  public leadId!: number;

  viewProfile(){
    this.display = !this.display;
  }
}