import { Component } from '@angular/core';

@Component({
  selector: 'app-leader-home',
  templateUrl: './leader-home.component.html',
  styleUrls: ['./leader-home.component.css']
})
export class LeaderHomeComponent {

  hide = true;
  display = false;
  public all:boolean = true;
  public follow:boolean = false;
  public post:boolean = false;
  public filterPost:boolean = false;
  public postId!: number;
  public userId!: number;

  viewProfile(){
    this.display = !this.display;
  }

}
