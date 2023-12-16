import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataModel } from 'src/app/DataModel';
import { CommonService } from 'src/app/services/common.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { LeaderupdatesComponent } from '../../updates/leaderupdates/leaderupdates.component';

@Component({
  selector: 'app-leader-search-home',
  templateUrl: './leader-search-home.component.html',
  styleUrls: ['./leader-search-home.component.css']
})
export class LeaderSearchHomeComponent {


  constructor(public router:Router,private log:LoginService,private comm:CommonService,public dialog: MatDialog){ }


  data =[DataModel];
  display1 = false;
  display2 = false;
  displayFollow=false;
  displayfollowerDetails=false;
  displayFollowing=false;
  displayfollowingDetails=false;
  displayPost=false;
  displayPostDetails=false;
  postId!:number;
  leadId!:number;
  userId!:number;
  filterType!:String;
  filterId!:number;
  filterreq1:boolean=false;
  filterreq2:boolean=false;
  filter:boolean=false;
  d:any;
  val:any;


  home(){
    this.router.navigate(['/leaderhome']);
  }
  manage(){
    this.router.navigate(['/manage']);
  }
  updates(){
    this.dialog.open(LeaderupdatesComponent,{
      width:'100%',
      position:{top: '5%', right:'0px'},
      panelClass:'custom-modalbox'
    });
    //this.router.navigate(['/userupdates']);
  }


  logout(){
    Swal.fire({
      title: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out!',
      cancelButtonText: 'No, stay more for a while.',
    }).then((result) => {
      if (result.isConfirmed) {
        this.log.logout();
        console.log('LOGGED OUT!');
        this.router.navigate(['login']);
      } else if (result.isDismissed) {

      }
    })
  }


}