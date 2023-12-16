import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Industry } from 'src/app/Industry';
import { CommonService } from 'src/app/services/common.service';
import { LeaderService } from 'src/app/services/leader.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { Skill } from 'src/app/skill';

@Component({
  selector: 'app-view-profile-leader',
  templateUrl: './view-profile-leader.component.html',
  styleUrls: ['./view-profile-leader.component.css']
})
export class ViewProfileLeaderComponent implements OnInit{

  /*Variables Declarations */
  user: any;
  username: any;
  hide = true;
  cEdit = false;
  sEdit = false;
  iEdit = false;
  lEdit = false;

  constructor(private snack:MatSnackBar,public router:Router,private logServ:LoginService,private leadServ:LeaderService,private comm:CommonService){ }

  skillControl = new FormControl('', [Validators.required]);
  locationControl = new FormControl('', [Validators.required]);
  industryControl = new FormControl('', [Validators.required]);
  roleControl = new FormControl('', [Validators.required]);

  public skills = [Skill];
  public location = [Location];
  public industry = [Industry];

  ngOnInit(): void {


    this.username =this.logServ.getUser().username;

    /* Fetching Leader Details */
    this.leadServ.getUserDetails(this.username).subscribe(
      res=>{ console.log(res); this.user = res; },
      err=>{ console.log(err);}
    )

    /*Fetching Skills */
    this.comm.fetchSkills().subscribe(
      res=>{ this.skills = res; },
      err =>{ console.log(err); }
    )

     /*Fetching Locations */
    this.comm.fetchLocations().subscribe(
      res=>{ this.location = res; },
      err =>{ console.log(err); }
    )

     /*Fetching Industry */
    this.comm.fetchIndustry().subscribe(
      res=>{ this.industry = res; },
      err =>{ console.log(err); }
    )
  }

  /*Name Edit */
  nameEdit(){
    this.snack.open('Sorry!! You cannot edit name',' ',{duration:3000});
  }

  /*Name Edit */
  emailEdit(){
    this.snack.open('Sorry!! You cannot edit email',' ',{duration:3000});
  }
  /*Contact Update */
  contactEdit(){
    this.cEdit=true;
  }

  contactUpdate(){
    var contact = (<HTMLInputElement>document.getElementById('contactNo')).value;
    console.log(contact);
    this.leadServ.updateContact(contact).subscribe(
      res=>{
        console.log(res);
        this.cEdit=false;
      },
      err=>{ console.log(err);}
    )
  }

  /* Skill Update */
  skillEdit(){
    this.sEdit=true;
  }

  skillUpdate(){
    var id = this.user.skillId.id;
    console.log(id);
    this.leadServ.updateSkill(id).subscribe(
      res=>{
        console.log(res);
        this.sEdit=false;
      },
      err=>{ console.log(err);}
    )
  }

  /* Industry Update */
  indEdit(){
    this.iEdit=true;
  }

  indUpdate(){
    var id = this.user.industryId.id;
    console.log(id);
    this.leadServ.updateIndustry(id).subscribe(
      res=>{
        console.log(res);
        this.iEdit=false;
      },
      err=>{ console.log(err);}
    )
  }

  /* Location Update */
  locEdit(){
    this.lEdit=true;
  }

  locUpdate(){
    var id = this.user.locationId.id;
    console.log(id);
    this.leadServ.updateLocation(id).subscribe(
      res=>{
        console.log(res);
        this.lEdit=false;
      },
      err=>{ console.log(err);}
    )
  }

}
