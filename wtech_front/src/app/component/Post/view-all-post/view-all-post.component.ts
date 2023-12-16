import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaderHomeComponent } from 'src/app/pages/leader/leader-home/leader-home.component';
import { Post } from 'src/app/post';
import { LeaderService } from 'src/app/services/leader.service';

@Component({
  selector: 'app-view-all-post',
  templateUrl: './view-all-post.component.html',
  styleUrls: ['./view-all-post.component.css']
})
export class ViewAllPostComponent implements OnInit{

  public postDetails = [Post];

  constructor(private router:Router,private leadHome:LeaderHomeComponent,private leadServ:LeaderService){ }

  ngOnInit(): void {

   this.leadServ.getAllPosts().subscribe(
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

  viewPost(id:number){
    this.leadHome.all=false;
    this.leadHome.post=true;
    this.leadHome.follow=false;
    this.leadHome.filterPost=false;
    console.log(id);
    this.leadHome.postId = id;
  }

}
