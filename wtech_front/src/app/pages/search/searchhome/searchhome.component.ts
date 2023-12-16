import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataModel } from 'src/app/DataModel';
import { CommonService } from 'src/app/services/common.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { UpdatesComponent } from '../../updates/updates/updates.component';

@Component({
  selector: 'app-searchhome',
  templateUrl: './searchhome.component.html',
  styleUrls: ['./searchhome.component.css']
})
export class SearchhomeComponent{

  constructor(public router:Router,private log:LoginService,private comm:CommonService,public dialog: MatDialog){ }

  data =[DataModel];
  display = false;
  leadId!:number;
  filterType!:String;
  filterId!:number;
  filterreq:boolean=false;
  filter:boolean=false;
  d:any;
  val:any;


  home(){
    this.router.navigate(['/userhome']);
  }

  updates(){
    this.dialog.open(UpdatesComponent,{
      width:'100%',
      position:{top: '5%', right:'0px'},
      panelClass:'custom-modalbox'
    });
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

        console.log('Clicked No, File is safe!');

      }
    })
  }

  filter_req(){
    this.filter = true;
    console.log("Called")
    this.d = (<HTMLInputElement>document.getElementById("filter_opt")).value;
    if(this.d=="skill"){
      this.comm.fetchSkills().subscribe(
        res=>{ this.data = res; },
        err =>{ console.log(err); }
      )
    }
    else if(this.d=="industry"){
      this.comm.fetchIndustry().subscribe(
        res=>{ this.data = res; },
        err =>{ console.log(err); }
      )
    }
    else if(this.d=="location"){
      this.comm.fetchLocations().subscribe(
        res=>{ this.data = res; },
        err =>{ console.log(err); }
      )
    }
    else{
      this.filter=false;
      this.filterreq=false;
    }
  }

  filter_done(){
    this.val = (<HTMLInputElement>document.getElementById("filter_val")).value;
    console.log("Requested Filter ",this.d," and value is ",this.val);
    this.filterId=this.val;
    this.filterType=this.d;
    this.filterreq=true;
  }

}
