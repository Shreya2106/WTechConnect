import {Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSidenav} from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { UpdatesComponent } from 'src/app/pages/updates/updates/updates.component';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public router:Router,private log:LoginService,public dialog: MatDialog){ }

  search(){
    this.router.navigate(['/searchhome']);
  }
  updates(){
    this.dialog.open(UpdatesComponent,{
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

