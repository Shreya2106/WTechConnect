import { Component, OnInit } from '@angular/core';
import { LeaderSearchHomeComponent } from 'src/app/pages/search/leader-search-home/leader-search-home.component';
import { LeaderService } from 'src/app/services/leader.service';

@Component({
  selector: 'app-view-user-list',
  templateUrl: './view-user-list.component.html',
  styleUrls: ['./view-user-list.component.css']
})
export class ViewUserListComponent implements OnInit{

  constructor(private leadServ:LeaderService,private search:LeaderSearchHomeComponent){ }

  users=[];
  ngOnInit(): void {

    this.leadServ.getAllUser().subscribe(
      res=>{
        this.users=res;
        console.log(res);
      },
      err=>{ console.log(err);}
    )
  }
  viewDetail(userId:number){
    console.log(userId);
    this.search.display2 = true;
    this.search.userId=userId;
  }

  viewFollowings(userId:number){
    console.log(userId);
    this.search.displayFollow=false;
    this.search.displayFollowing = true;
    this.search.userId=userId;
  }

}