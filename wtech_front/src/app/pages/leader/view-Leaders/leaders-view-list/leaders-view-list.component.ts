import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LeaderSearchHomeComponent } from 'src/app/pages/search/leader-search-home/leader-search-home.component';
import { CommonService } from 'src/app/services/common.service';
import { LeaderService } from 'src/app/services/leader.service';

@Component({
  selector: 'app-leaders-view-list',
  templateUrl: './leaders-view-list.component.html',
  styleUrls: ['./leaders-view-list.component.css']
})
export class LeadersViewListComponent implements OnInit{

  constructor(private leadServ:LeaderService,private search:LeaderSearchHomeComponent, private comm:CommonService){ }

  leaders=[];
  ngOnInit(): void {

    this.leadServ.getAllLeaders().subscribe(
      res=>{
        this.leaders=res;
        console.log("Leaders :"+res);
      },
      err=>{ console.log(err);}
    )
  }
  viewDetail(leadId:number){
      this.search.display1 = true;
      this.search.leadId=leadId;
  }

  viewFollower(leadId:number){
    console.log("clicked");
    this.search.display1=false;
    this.search.displayFollow = true;
    this.search.leadId=leadId;
  }

  viewPost(leadId:number){
    this.search.displayFollow=false;
    this.search.displayFollowing=false;
    this.search.displayPost=true;
    this.search.leadId=leadId;
  }

}