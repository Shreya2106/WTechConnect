import { Component, OnInit } from '@angular/core';
import { LeaderSearchHomeComponent } from 'src/app/pages/search/leader-search-home/leader-search-home.component';
import { LeaderService } from 'src/app/services/leader.service';

@Component({
  selector: 'app-leaders-view-leader-by-id',
  templateUrl: './leaders-view-leader-by-id.component.html',
  styleUrls: ['./leaders-view-leader-by-id.component.css']
})
export class LeadersViewLeaderByIdComponent implements OnInit{

  constructor(private leadServ:LeaderService,private search:LeaderSearchHomeComponent){ }

  lead:any;

  closeLead(){
    this.search.display1=false;
    this.search.displayfollowingDetails=false;
  }

  ngOnInit(): void {

    /* Fetching Leader Details */
    this.leadServ.getLeaderById(this.search.leadId).subscribe(
      res=>{
        console.log(res);
        this.lead = res;
        JSON.stringify(this.lead.skillId).replaceAll(/[""{}]/g,"").replaceAll(":"," ").split(",")
          .forEach(element=>{
            if(element.startsWith('name')){
              this.lead['skillId']= element.substring(5);
            }
        })

        JSON.stringify(this.lead.industryId).replaceAll(/[""{}]/g,"").replaceAll(":"," ").split(",")
          .forEach(element=>{
            if(element.startsWith('name')){
              this.lead['industryId']= element.substring(5);
            }
        })

        JSON.stringify(this.lead.locationId).replaceAll(/[""{}]/g,"").replaceAll(":"," ").split(",")
          .forEach(element=>{
            if(element.startsWith('name')){
              this.lead['locationId']= element.substring(5);
            }
        })

      },
      err=>{ console.log(err);}
    )
  }
}