import { Component, OnInit } from '@angular/core';
import { UserHomeComponent } from 'src/app/pages/user/user-home/user-home.component';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-followings',
  templateUrl: './viewfollowings.component.html',
  styleUrls: ['./viewfollowings.component.css']
})
export class ViewFollowingsComponent implements OnInit{

  followings:any;

  constructor(private userServ:UserService,private comm:CommonService,private userHome:UserHomeComponent){ }

  viewLeader(id:number){
    this.userHome.all=false;
    this.userHome.follow=true;
    this.userHome.post=false;
    console.log(id);
    this.userHome.leadId = id;
  }
  ngOnInit(): void {
    this.userServ.getFollowings().subscribe(
      res=>{
          this.followings = res;
          console.log(this.followings);
      },
      err=>{ console.log(err); }
    )
  }

}