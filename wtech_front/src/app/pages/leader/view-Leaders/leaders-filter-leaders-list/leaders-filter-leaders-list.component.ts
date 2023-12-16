import { Component } from '@angular/core';
import { LeaderSearchHomeComponent } from 'src/app/pages/search/leader-search-home/leader-search-home.component';
import { LeaderService } from 'src/app/services/leader.service';

@Component({
  selector: 'app-leaders-filter-leaders-list',
  templateUrl: './leaders-filter-leaders-list.component.html',
  styleUrls: ['./leaders-filter-leaders-list.component.css']
})
export class LeadersFilterLeadersListComponent {

  constructor(private leadServ:LeaderService,private search:LeaderSearchHomeComponent){ }

  leaders=[];

  ngOnInit(): void {

    var type= this.search.filterType;
    var val = this.search.filterId;

    /* Leader By Skill */
    if(type=='skill'){
      this.leadServ.getLeaderBySkill(val).subscribe(
        res=>{
          this.leaders=res;
          console.log(res);
        },
        err=>{ console.log(err);}
      )
    }

    /* Leader By Industry */
    if(type=='industry'){
      this.leadServ.getLeaderByIndustry(val).subscribe(
        res=>{
          this.leaders=res;
          console.log(res);
        },
        err=>{ console.log(err);}
      )
    }

    /* Leader By Location*/
    if(type=='location'){
      this.leadServ.getLeaderByLocation(val).subscribe(
        res=>{
          this.leaders=res;
          console.log(res);
        },
        err=>{ console.log(err);}
      )
    }

  }

  /*View Leader By Id */
  viewDetail(leadId:number){
      this.search.display1 = true;
      this.search.leadId=leadId;
  }
}
