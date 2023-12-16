import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaderService } from 'src/app/services/leader.service';

@Component({
  selector: 'app-leaderupdates',
  templateUrl: './leaderupdates.component.html',
  styleUrls: ['./leaderupdates.component.css']
})
export class LeaderupdatesComponent implements OnInit{

  constructor(public router:Router,private leadServ:LeaderService){ }

  notifs:any;
  none:boolean=false;

  ngOnInit(): void {
    this.leadServ.getUpdates().subscribe(
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
    this.leadServ.delUpdates().subscribe(
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
