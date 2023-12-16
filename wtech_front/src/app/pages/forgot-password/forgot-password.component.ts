import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Logindata } from 'src/app/logindata';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  ngOnInit(): void { }
  constructor(private snack:MatSnackBar,public router:Router,private logServ:LoginService){ }
  hide = true;
  logindata = new Logindata();
  pass2:any;
  changePass(){
    /* Validations */
    if(this.logindata.email=='' || this.logindata.email==null){
      this.snack.open('Username is required !!',' ',{duration:3000});
      return;
    }
    if(this.logindata.password=='' || this.logindata.password==null){
      this.snack.open('Password is required !!',' ',{duration:3000});
      return;
    }
    this.pass2=(<HTMLInputElement>document.getElementById("password2")).value;
    if(this.pass2=='' || this.pass2==null){
      this.snack.open('Password is required !!',' ',{duration:3000});
      return;
    }
    if(this.pass2!=this.logindata.password){
      this.snack.open('Both Passwords should match !!',' ',{duration:3000});
      return;
    }

    this.logServ.changePass(this.logindata).subscribe(
      res=>{
        console.log(res);
        Swal.fire('Password changed Successfully:)');
        Swal.update({
          icon: 'success'
        })
        this.router.navigate(['login']);
      },
      err=>{
        console.log(err);
        Swal.fire('Please Enter valid credentials');
        Swal.update({
          icon: 'error'
        })
        this.reloadCurrentRoute();
      }
    )
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}
