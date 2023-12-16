import { Component, OnInit } from '@angular/core';
import { UserHomeComponent } from '../user-home/user-home.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-user-body',
  templateUrl: './user-body.component.html',
  styleUrls: ['./user-body.component.css']
})
export class UserBodyComponent{



  /* filter(){
    this.f = true;
  }

  filterRequested(){
    console.log("Called");
    var name = (<HTMLInputElement>document.getElementById("leadname")).value;
    this.userHome.filterPost=true;
    this.userHome.all=false;
    this.userHome.post=false;
    this.userHome.follow=false;
    this.comm.getLeaderIdByName(name).subscribe(
      res=>{
        console.log(res);
        this.userHome.leadId = res;
      },
      err=>{ console.log(err);}
    )
  } */

}
