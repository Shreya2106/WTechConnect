import { Component, OnInit } from '@angular/core';
import { LeaderHomeComponent } from 'src/app/pages/leader/leader-home/leader-home.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-post-by-id-lead',
  templateUrl: './post-by-id-lead.component.html',
  styleUrls: ['./post-by-id-lead.component.css']
})
export class PostByIdLeadComponent implements OnInit {

  id!:number;
  postObj:any;
  constructor(private leadHome:LeaderHomeComponent,private comm:CommonService){ }

  goBack(){
    this.leadHome.all=true;
  }
  ngOnInit(): void {
     this.id = this.leadHome.postId;

     this.comm.postById(this.id).subscribe(
      res=>{
        this.postObj = res;
        console.log(this.postObj);
         JSON.stringify(this.postObj.createdBy).replaceAll(/[""{}]/g,"").replaceAll(":"," ").split(",")
          .forEach(element=>{
            if(element.startsWith('leaderName')){
              this.postObj['createdBy']= element.substring(10);
            }
          })
      },
      err=>{ console.log(err);}
     )
  }


}