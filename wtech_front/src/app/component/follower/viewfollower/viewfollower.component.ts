import { Component, OnInit } from '@angular/core';
import { LeaderHomeComponent } from 'src/app/pages/leader/leader-home/leader-home.component';
import { CommonService } from 'src/app/services/common.service';
import { LeaderService } from 'src/app/services/leader.service';

@Component({
  selector: 'app-viewfollower',
  templateUrl: './viewfollower.component.html',
  styleUrls: ['./viewfollower.component.css']
})
export class ViewfollowerComponent implements OnInit{

  followers:any;

  constructor(private leadServ:LeaderService,private comm:CommonService,private leaderHome:LeaderHomeComponent){ }

  viewUser(id:number){
    this.leaderHome.all=false;
    this.leaderHome.follow=true;
    this.leaderHome.post=false;
    console.log(id);
    this.leaderHome.userId = id;
  }
  ngOnInit(): void {
    this.leadServ.getFollowers().subscribe(
      res=>{
          this.followers = res;
          console.log(this.followers);
      },
      err=>{ console.log(err); }
    )
  }

}
