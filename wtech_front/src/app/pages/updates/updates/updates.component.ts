import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit{

  constructor(public router:Router,private userServ:UserService){ }

  notifs:any;
  none:boolean=false;

  ngOnInit(): void {
    this.userServ.getUpdates().subscribe(
      res=>{
        console.log(res);
        var data = JSON.stringify(res).replaceAll(/[""{}]/g,"").replace("message","");
        console.log(data);
        if(data == ':null'){
          this.none=true;
        }
        else{
           this.notifs = data.split(":");
        }
        console.log(this.notifs);
      },
      err=>{ console.log(err);}
    )
  }
  seen(){
    this.userServ.delUpdates().subscribe(
      res=>{
        console.log(res);
        this.reloadCurrentRoute();
      },
      err=>{ console.log(err);}
    )
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

}