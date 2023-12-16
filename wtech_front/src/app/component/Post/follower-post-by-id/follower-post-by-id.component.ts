import { Component, OnInit } from '@angular/core';
import { LeaderSearchHomeComponent } from 'src/app/pages/search/leader-search-home/leader-search-home.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-follower-post-by-id',
  templateUrl: './follower-post-by-id.component.html',
  styleUrls: ['./follower-post-by-id.component.css']
})
export class FollowerPostByIdComponent implements OnInit {

  id!:number;
  postObj:any;
  constructor(private search:LeaderSearchHomeComponent,private comm:CommonService){ }

  goBack(){
    this.search.displayFollow=false;
    this.search.displayFollowing=false;
    this.search.displayPost=false;
    this.search.displayPostDetails=false;
  }
  ngOnInit(): void {
     this.id = this.search.postId;

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
