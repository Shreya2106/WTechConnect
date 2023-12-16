import { Component, OnInit } from '@angular/core';
import { LeaderSearchHomeComponent } from 'src/app/pages/search/leader-search-home/leader-search-home.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-view-following-by-user',
  templateUrl: './view-following-by-user.component.html',
  styleUrls: ['./view-following-by-user.component.css']
})
export class ViewFollowingByUserComponent implements OnInit{

  constructor(private search:LeaderSearchHomeComponent, private comm:CommonService){ }

  followings=[];
  userName: any;

  ngOnInit(): void {

    this.comm.getUserNameById(this.search.leadId).subscribe(
      res=>{
        console.log(res);
        this.userName=res.message;
      },
      err=>{ console.log(err); }
    )

    this.comm.getFollowingsByUserId(this.search.leadId).subscribe(
      res=>{
        console.log(res);
        this.followings = res;
      },
      err=>{
        console.log(err);
      }
    )
  }

  viewDetail(userId:number){
    this.search.displayfollowingDetails = true;
    this.search.displayFollow=false;
    this.search.displayFollowing=true;
    this.search.userId=userId;
    console.log(userId+" Came here");
  }

  goBack(){
    this.search.displayFollowing=false;
  }


}