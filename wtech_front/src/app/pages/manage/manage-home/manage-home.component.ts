import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { LeaderupdatesComponent } from '../../updates/leaderupdates/leaderupdates.component';

@Component({
  selector: 'app-manage',
  templateUrl: './manage-home.component.html',
  styleUrls: ['./manage-home.component.css']
})
export class ManageHomeComponent {

  constructor(public router:Router,private log:LoginService,public dialog: MatDialog){ }

  home(){
    this.router.navigate(['/leaderhome']);
  }

  search(){
    this.router.navigate(['/leadersearchhome']);
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

        console.log('Clicked No, File is safe!');

      }
    })
  }

}