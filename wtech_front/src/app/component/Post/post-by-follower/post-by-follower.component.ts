import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaderSearchHomeComponent } from 'src/app/pages/search/leader-search-home/leader-search-home.component';
import { Post } from 'src/app/post';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-post-by-follower',
  templateUrl: './post-by-follower.component.html',
  styleUrls: ['./post-by-follower.component.css']
})
export class PostByFollowerComponent implements OnInit {

  id!:number;
  postObj:any;
  leadName:any;
  constructor(private search:LeaderSearchHomeComponent,private comm:CommonService,private router:Router){ }

  goBack(){
    this.search.displayFollow=false;
    this.search.displayFollowing=false;
    this.search.displayPost=false;
  }
  public postDetails = [Post];

  ngOnInit(): void {

    this.comm.getLeaderNameById(this.search.leadId).subscribe(
      res=>{
        console.log(res);
        this.leadName=res.message;
      },
      err=>{ console.log(err); }
    )

    this.comm.postByLeaderId(this.search.leadId).subscribe(
      res=>{
        console.log(res);
        this.postDetails = res;
        for(let post of this.postDetails){
          var datas = JSON.stringify(post.createdBy);
          datas.replaceAll(/[""{}]/g,"").replaceAll(":"," ").split(",")
          .forEach(element=>{
            if(element.startsWith('leaderName')){
              post['createdBy']= element.substring(10);
            }
          })
        }
      },
      err=>{ console.log(err)}
    )
  }

    viewPost(id:number){
      this.search.displayFollow=false;
      this.search.displayFollowing=false;
      this.search.displayPost=false;
      this.search.displayPostDetails=true;
      console.log(id);
      this.search.postId = id;
    }

}
