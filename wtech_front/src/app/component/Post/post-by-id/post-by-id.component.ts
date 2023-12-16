import { CommonService } from './../../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { UserHomeComponent } from 'src/app/pages/user/user-home/user-home.component';

@Component({
  selector: 'app-post-by-id',
  templateUrl: './post-by-id.component.html',
  styleUrls: ['./post-by-id.component.css']
})
export class PostByIdComponent implements OnInit {

  id!:number;
  postObj:any;
  constructor(private userHome:UserHomeComponent,private comm:CommonService){ }

  goBack(){
    this.userHome.all=true;
  }
  ngOnInit(): void {
     this.id = this.userHome.postId;

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
