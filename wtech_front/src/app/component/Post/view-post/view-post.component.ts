import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { UserService } from 'src/app/services/user.service';
import { UserHomeComponent } from 'src/app/pages/user/user-home/user-home.component';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit{

  public postDetails = [Post];

  constructor(private userServ:UserService,private router:Router,private userHome:UserHomeComponent,private comm: CommonService){ }

  ngOnInit(): void {

   if(!this.userHome.filterPost){
    this.userServ.getPostsOfFollowings().subscribe(
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
      err=>{ console.log(err); }
    )
  }
  else{
    this.comm.postByLeaderId(this.userHome.leadId).subscribe(
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
}

  viewPost(id:number){
    this.userHome.all=false;
    this.userHome.post=true;
    this.userHome.follow=false;
    this.userHome.filterPost=false;
    console.log(id);
    this.userHome.postId = id;
  }

}
