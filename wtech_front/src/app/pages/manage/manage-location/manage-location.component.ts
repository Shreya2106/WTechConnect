import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { LeaderService } from 'src/app/services/leader.service';
import Swal from 'sweetalert2';
import { Location } from 'src/app/Location';

@Component({
  selector: 'app-manage-location',
  templateUrl: './manage-location.component.html',
  styleUrls: ['./manage-location.component.css']
})
export class ManageLocationComponent implements OnInit{

  constructor(private snack:MatSnackBar,public router:Router,private comm:CommonService,private leadServ:LeaderService){ }

  public location = [];
  add:boolean=false;
  e:boolean=false;
  eid!:number;
  loc=new Location();
  new_loc=new Location();
  ngOnInit(): void {

    /*Fetching Industry */
    this.comm.fetchLocations().subscribe(
      res=>{ this.location = res; },
      err =>{ console.log(err); }
    )
  }

  addfunc(){
    this.add=true;
  }

  addLocation(){
    this.leadServ.addLocation(this.loc).subscribe(
      res=>{
        console.log(res);
        Swal.fire('Location Added:)');
          Swal.update({
            icon: 'success'
          })
          this.reloadCurrentRoute();
      },
      err=>{ console.log(err);}
    )
  }

  edit(id:number){
    console.log("Clicked "+id);
    this.e=true;
    this.eid=id;
  }
  editDone(){
    console.log(this.new_loc);
    this.leadServ.editLocation(this.new_loc,this.eid).subscribe(
      res=>{
        console.log(res);
        Swal.fire('Location Updated:)');
          Swal.update({
            icon: 'success'
          })
          this.reloadCurrentRoute();
      },
      err=>{ console.log(err);}
    )
  }

  del(id:number){
    console.log("Clicked "+id);
    this.leadServ.deleteLocation(id).subscribe(
      res=>{
        console.log("Deleted "+ res);
        Swal.fire('Location Deleted:)');
          Swal.update({
            icon: 'success'
          })
          this.reloadCurrentRoute();
      },
      err=>{ console.log(err); }
    )
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}