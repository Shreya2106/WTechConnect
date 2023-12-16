import { Component, OnInit } from '@angular/core';
import { UserHomeComponent } from 'src/app/pages/user/user-home/user-home.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-follow-by-id',
  templateUrl: './follow-by-id.component.html',
  styleUrls: ['./follow-by-id.component.css']
})
export class FollowByIdComponent implements OnInit{

  id!:number;
  leadObj:any;

  constructor(private userHome:UserHomeComponent,private comm:CommonService){ }

  goBack(){
    this.userHome.all=true;
    this.userHome.post=false;
    this.userHome.follow=false;
  }

  viewLeaderPost(leadId:number) {
    this.userHome.leadId = leadId;
    this.userHome.filterPost=true;
    this.userHome.all=false;
    this.userHome.post=false;
    this.userHome.follow=false;
    console.log("Clicked- ",leadId);
  }


  ngOnInit(): void {
     this.id = this.userHome.leadId;
     console.log(this.id);
     this.comm.getLeaderById(this.id).subscribe(
      res=>{
        this.leadObj = res;
        console.log(this.leadObj);
        JSON.stringify(this.leadObj.skillId).replaceAll(/[""{}]/g,"").replaceAll(":"," ").split(",")
          .forEach(element=>{
            if(element.startsWith('name')){
              this.leadObj['skillId']= element.substring(5);
            }
          })
          JSON.stringify(this.leadObj.industryId).replaceAll(/[""{}]/g,"").replaceAll(":"," ").split(",")
          .forEach(element=>{
            if(element.startsWith('name')){
              this.leadObj['industryId']= element.substring(5);
            }
          })
          JSON.stringify(this.leadObj.locationId).replaceAll(/[""{}]/g,"").replaceAll(":"," ").split(",")
          .forEach(element=>{
            if(element.startsWith('name')){
              this.leadObj['locationId']= element.substring(5);
            }
          })

      },
      err=>{ console.log(err);}
     )
  }
}
