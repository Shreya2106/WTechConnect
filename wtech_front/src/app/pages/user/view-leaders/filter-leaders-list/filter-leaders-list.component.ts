import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LeaderService } from 'src/app/services/leader.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { SearchhomeComponent } from '../../../search/searchhome/searchhome.component';

@Component({
  selector: 'app-filter-leaders-list',
  templateUrl: './filter-leaders-list.component.html',
  styleUrls: ['./filter-leaders-list.component.css']
})
export class FilterLeadersListComponent {

  constructor(private userServ:UserService,private snack:MatSnackBar,private leadServ:LeaderService,private search:SearchhomeComponent){ }

  leaders=[];

  /* Follow request*/
  followLead(leadId:number){
    this.userServ.follow(leadId).subscribe(
      res=>{
        console.log(res);
         Swal.fire('Started Following:)');
          Swal.update({
            icon: 'success'
          })
      },
      err=>{
        console.log(err);
        this.snack.open('Already following!!',' ',{duration:3000});
      }
    )
  }
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
      this.search.display = true;
      this.search.leadId=leadId;
  }
}