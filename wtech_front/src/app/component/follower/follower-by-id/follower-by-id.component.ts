import { Component, OnInit } from '@angular/core';
import { LeaderHomeComponent } from 'src/app/pages/leader/leader-home/leader-home.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-follower-by-id',
  templateUrl: './follower-by-id.component.html',
  styleUrls: ['./follower-by-id.component.css']
})
export class FollowerByIdComponent implements OnInit{

  id!:number;
  userObj:any;

  constructor(private leadHome:LeaderHomeComponent,private comm:CommonService){ }

  goBack(){
    this.leadHome.all=true;
    this.leadHome.post=false;
    this.leadHome.follow=false;
  }

  ngOnInit(): void {
     this.id = this.leadHome.userId;
     console.log(this.id);
     this.comm.getUserById(this.id).subscribe(
      res=>{
        this.userObj = res;
        console.log(this.userObj);
        JSON.stringify(this.userObj.skillId).replaceAll(/[""{}]/g,"").replaceAll(":"," ").split(",")
          .forEach(element=>{
            if(element.startsWith('name')){
              this.userObj['skillId']= element.substring(5);
            }
          })
          JSON.stringify(this.userObj.industryId).replaceAll(/[""{}]/g,"").replaceAll(":"," ").split(",")
          .forEach(element=>{
            if(element.startsWith('name')){
              this.userObj['industryId']= element.substring(5);
            }
          })
          JSON.stringify(this.userObj.locationId).replaceAll(/[""{}]/g,"").replaceAll(":"," ").split(",")
          .forEach(element=>{
            if(element.startsWith('name')){
              this.userObj['locationId']= element.substring(5);
            }
          })

      },
      err=>{ console.log(err);}
     )
  }
}