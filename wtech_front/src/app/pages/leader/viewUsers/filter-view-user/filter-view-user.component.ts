import { Component } from '@angular/core';
import { LeaderSearchHomeComponent } from 'src/app/pages/search/leader-search-home/leader-search-home.component';
import { LeaderService } from 'src/app/services/leader.service';

@Component({
  selector: 'app-filter-view-user',
  templateUrl: './filter-view-user.component.html',
  styleUrls: ['./filter-view-user.component.css']
})
export class FilterViewUserComponent {

  constructor(private leadServ:LeaderService,private search:LeaderSearchHomeComponent){ }

  users=[];

  ngOnInit(): void {

    var type= this.search.filterType;
    var val = this.search.filterId;

    /* Leader By Skill */
    if(type=='skill'){
      this.leadServ.getUserBySkill(val).subscribe(
        res=>{
          this.users=res;
          console.log(res);
        },
        err=>{ console.log(err);}
      )
    }

    /* Leader By Industry */
    if(type=='industry'){
      this.leadServ.getUserByIndustry(val).subscribe(
        res=>{
          this.users=res;
          console.log(res);
        },
        err=>{ console.log(err);}
      )
    }

    /* Leader By Location*/
    if(type=='location'){
      this.leadServ.getUserByLocation(val).subscribe(
        res=>{
          this.users=res;
          console.log(res);
        },
        err=>{ console.log(err);}
      )
    }
    else{
      this.search.filter=false;
      this.search.filterreq2=false;
    }

  }

  /*View Leader By Id */
  viewDetail(userId:number){
      this.search.display2 = true;
      this.search.userId=userId;
  }

}