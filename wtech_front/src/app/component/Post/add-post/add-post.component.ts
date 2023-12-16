import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post__ } from 'src/app/Post__';
import { LeaderService } from 'src/app/services/leader.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent{

  post = new Post__();
  constructor(public router:Router,private leadServ:LeaderService){ }

  addPost(){
    this.leadServ.addPost(this.post).subscribe(
      res=>{
        console.log(res);
        Swal.fire('Post Added Successfully:)');
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