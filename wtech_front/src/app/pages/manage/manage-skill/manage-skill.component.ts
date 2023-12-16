import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { LeaderService } from 'src/app/services/leader.service';
import { Skill } from 'src/app/skill';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-skill',
  templateUrl: './manage-skill.component.html',
  styleUrls: ['./manage-skill.component.css']
})
export class ManageSkillComponent implements OnInit{

  constructor(public router:Router,private comm:CommonService,private leadServ:LeaderService){ }

  public skills_list = [];
  add:boolean=false;
  e:boolean=false;
  eid!:number;
  skill=new Skill();
  new_skill=new Skill();
  ngOnInit(): void {

    /*Fetching Industry */
    this.comm.fetchSkills().subscribe(
      res=>{ this.skills_list = res; },
      err =>{ console.log(err); }
    )
  }

  addfunc(){
    this.add=true;
  }

  addSkill(){
    this.leadServ.addSkill(this.skill).subscribe(
      res=>{
        console.log(res);
        Swal.fire('Skill Added:)');
          Swal.update({
            icon: 'success'
          })
          this.reloadCurrentRoute();
      },
      err=>{ console.log(err);}
    )
  }
  edit(id:number){
    console.log("Clicked "+id);
    this.e=true;
    this.eid=id;
  }
  editDone(){
    console.log(this.new_skill);
    this.leadServ.editSkill(this.new_skill,this.eid).subscribe(
      res=>{
        console.log(res);
        Swal.fire('Skill Updated:)');
          Swal.update({
            icon: 'success'
          })
          this.reloadCurrentRoute();
      },
      err=>{ console.log(err);}
    )
  }

  del(id:number){
    console.log("Clicked "+id);
    this.leadServ.deleteSkill(id).subscribe(
      res=>{
        console.log("Deleted"+ res);
        Swal.fire('Skill Deleted:)');
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