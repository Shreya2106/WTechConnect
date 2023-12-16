import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaderHomeComponent } from 'src/app/pages/leader/leader-home/leader-home.component';
import { Post } from 'src/app/post';
import { LeaderService } from 'src/app/services/leader.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit{

  public postDetails = [Post];
  display=false;

  constructor(public router:Router,private leadServ:LeaderService,private home:LeaderHomeComponent,){ }

  ngOnInit(): void {
    this.leadServ.myPosts().subscribe(
      res=>{
          console.log(res);
          this.postDetails = res;
      },
      err=>{ console.log(err); }
    )
  }
  viewPost(id:number){
    this.home.all=false;
    this.home.post=true;
    this.home.follow=false;
    this.home.filterPost=false;
    console.log(id);
    this.home.postId = id;
  }

  addPostForm(){
    this.display=true;
  }

  deletePost(id:number){
    this.leadServ.deletePost(id).subscribe(
      res=>{
        console.log("Deleted");
        Swal.fire('Post Deleted:)');
          Swal.update({
            icon: 'success'
          })
          this.reloadCurrentRoute();
      },
      err=>{ console.log(err); }
    )
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

}