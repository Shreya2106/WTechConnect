import { Component, OnInit } from '@angular/core';
import { SearchhomeComponent } from 'src/app/pages/search/searchhome/searchhome.component';
import { LeaderService } from 'src/app/services/leader.service';


@Component({
  selector: 'app-leader-by-id',
  templateUrl: './leader-by-id.component.html',
  styleUrls: ['./leader-by-id.component.css']
})
export class LeaderByIdComponent implements OnInit{

  constructor(private leadServ:LeaderService,private search:SearchhomeComponent){ }

  lead:any;

  closeLead(){
    this.search.display=false;
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