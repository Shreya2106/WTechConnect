import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { Industry } from 'src/app/Industry';
import { Registerdata } from 'src/app/registerdata';
import { CommonService } from 'src/app/services/common.service';
import { Skill } from 'src/app/skill';
import { Role } from 'src/app/Role';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  res: any;

  constructor(private snack:MatSnackBar,public router:Router,private comm:CommonService){ }

  hide = true;
  registerdata = new Registerdata();

  skillControl = new FormControl('', [Validators.required]);
  locationControl = new FormControl('', [Validators.required]);
  industryControl = new FormControl('', [Validators.required]);
  roleControl = new FormControl('', [Validators.required]);

  public skills = [Skill];
  public location = [Location];
  public industry = [Industry];

  public role: Role[]=[{name:'USER', value:'ROLE_USER'},{name:'LEADER',value:'ROLE_LEADER'}];

  ngOnInit(): void {
    this.comm.fetchSkills().subscribe(
      res=>{
        console.log(res);
        this.skills = res;
      },
      err =>{
        console.log(err);
      }
    )
    this.comm.fetchLocations().subscribe(
      res=>{
        console.log(res);
        this.location = res;
      },
      err =>{
        console.log(err);
      }
    )
    this.comm.fetchIndustry().subscribe(
      res=>{
        console.log(res);
        this.industry = res;
      },
      err =>{
        console.log(err);
      }
    )
  }

  registerSubmit(){
    console.log(this.registerdata);
    console.log(this.registerdata.role);
    if(this.registerdata.email=='' || this.registerdata.email==null){
      this.snack.open('Username is required !!',' ',{duration:3000});
      return;
    }
    if(this.registerdata.password=='' || this.registerdata.password==null){
      this.snack.open('Password is required !!',' ',{duration:3000});
      return;
    }
    if(this.registerdata.name=='' || this.registerdata.name==null){
      this.snack.open('Name is required !!',' ',{duration:3000});
      return;
    }
    console.log(this.registerdata.role);
    if(this.registerdata.role =='ROLE_USER'){
        this.comm.registerUser(this.registerdata).subscribe(
        res=>{
          console.log(res);
          Swal.fire('Registered Successfully:)');
          Swal.update({
            icon: 'success'
          })
          this.router.navigate(['login']);
        },
        err =>{
          console.log(err);
          Swal.fire('Oops!! Could not register. Sorry. Please try again:|');
          Swal.update({
            icon: 'error'
          })
          this.router.navigate(['register']);
        }
      );
    }
    else{
      this.comm.registerUser(this.registerdata).subscribe(
       res=>{
          console.log(res);
          Swal.fire('Registered Successfully:)');
          Swal.update({
            icon: 'success'
          })
          this.router.navigate(['login']);
        },
        err =>{
          console.log(err);
          Swal.fire('Oops!! Could not register. Sorry. Please try again:|');
          Swal.update({
            icon: 'error'
          })
          this.router.navigate(['register']);
        });
    }

  }

}

