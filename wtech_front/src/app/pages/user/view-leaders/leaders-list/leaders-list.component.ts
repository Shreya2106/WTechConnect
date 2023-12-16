import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchhomeComponent } from 'src/app/pages/search/searchhome/searchhome.component';
import { LeaderService } from 'src/app/services/leader.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-leaders-list',
  templateUrl: './leaders-list.component.html',
  styleUrls: ['./leaders-list.component.css']
})
export class LeadersListComponent implements OnInit{

  constructor(private userServ:UserService,private snack:MatSnackBar,private leadServ:LeaderService,private search:SearchhomeComponent){ }

  leaders=[];

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

    this.leadServ.getAllLeaders().subscribe(
      res=>{
        this.leaders=res;
        console.log(res);
      },
      err=>{ console.log(err);}
    )
  }
  viewDetail(leadId:number){
      this.search.display = true;
      this.search.leadId=leadId;
  }

}