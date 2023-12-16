import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Industry } from 'src/app/Industry';
import { CommonService } from 'src/app/services/common.service';
import { LeaderService } from 'src/app/services/leader.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-industry',
  templateUrl: './manage-industry.component.html',
  styleUrls: ['./manage-industry.component.css']
})
export class ManageIndustryComponent implements OnInit{

  constructor(private snack:MatSnackBar,public router:Router,private comm:CommonService,private leadServ:LeaderService){ }

  public industry = [];
  add:boolean=false;
  e:boolean=false;
  eid!:number;
  ind=new Industry();
  new_ind=new Industry();
  ngOnInit(): void {

    /*Fetching Industry */
    this.comm.fetchIndustry().subscribe(
      res=>{ this.industry = res; },
      err =>{ console.log(err); }
    )
  }

  addfunc(){
    this.add=true;
  }

  addIndustry(){
    this.leadServ.addIndustry(this.ind).subscribe(
      res=>{
        console.log(res);
        Swal.fire('Industry Added:)');
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
    console.log(this.new_ind);
    this.leadServ.editIndustry(this.new_ind,this.eid).subscribe(
      res=>{
        console.log(res);
        Swal.fire('Industry Updated:)');
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
    this.leadServ.deleteIndustry(id).subscribe(
      res=>{
        console.log("Added "+ res);
        Swal.fire('Industry Deleted:)');
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