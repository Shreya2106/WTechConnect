import { MatSnackBar } from '@angular/material/snack-bar';
import { Logindata } from './../../logindata';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void { }
  constructor(private snack:MatSnackBar,public router:Router,private logServ:LoginService){ }
  hide = true;
  logindata = new Logindata();
  loginUser(){
    /* Validations */
    if(this.logindata.email=='' || this.logindata.email==null){
      this.snack.open('Username is required !!',' ',{duration:3000});
      return;
    }
    if(this.logindata.password=='' || this.logindata.password==null){
      this.snack.open('Password is required !!',' ',{duration:3000});
      return;
    }
    /* Generating token */
    this.logServ.Login(this.logindata).subscribe(
      res=>{
        console.log(res);
        Swal.fire('Login Successfully:)');
        Swal.update({
          icon: 'success'
        })
        /* Save token */
        this.logServ.saveToken(res.jwtToken);

        /* Fetching current user */
        this.logServ.getCurrentUser().subscribe(
          res=>{
            this.logServ.setUser(res);
            console.log(res);

            /* Fetching role */
            var role = this.logServ.getUserRole();
            console.log(role);
            if(role=='ROLE_USER')
              this.router.navigate(['userhome']);
            if(role=='ROLE_LEADER')
              this.router.navigate(['leaderhome']);
          },
          err=>{
            console.log(err);
          }
        )
      },
      err=>{
        console.log(err);
        Swal.fire(`${err.error}`);
        Swal.update({
            icon: 'error'
          })
      }
    )
  }
}