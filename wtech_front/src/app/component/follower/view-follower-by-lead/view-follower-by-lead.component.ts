import { Component, OnInit } from '@angular/core';
import { LeaderSearchHomeComponent } from 'src/app/pages/search/leader-search-home/leader-search-home.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-view-follower-by-lead',
  templateUrl: './view-follower-by-lead.component.html',
  styleUrls: ['./view-follower-by-lead.component.css']
})
export class ViewFollowerByLeadComponent implements OnInit{

  constructor(private search:LeaderSearchHomeComponent, private comm:CommonService){ }

  followers=[];
  leadName: any;

  ngOnInit(): void {

    this.comm.getLeaderNameById(this.search.leadId).subscribe(
      res=>{
        console.log(res);
        this.leadName=res.message;
      },
      err=>{ console.log(err); }
    )

    this.comm.getFollowersByLeadId(this.search.leadId).subscribe(
      res=>{
        console.log(res);
        this.followers = res;
      },
      err=>{
        console.log(err);
      }
    )
  }

  viewDetail(userId:number){
    this.search.displayfollowerDetails = true;
    this.search.userId=userId;
    console.log(userId+" Came here");
  }

  goBack(){
    this.search.displayFollow=false;
  }


}