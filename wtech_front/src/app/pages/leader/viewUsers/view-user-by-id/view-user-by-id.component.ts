import { Component, OnInit } from '@angular/core';
import { LeaderSearchHomeComponent } from 'src/app/pages/search/leader-search-home/leader-search-home.component';
import { LeaderService } from 'src/app/services/leader.service';

@Component({
  selector: 'app-view-user-by-id',
  templateUrl: './view-user-by-id.component.html',
  styleUrls: ['./view-user-by-id.component.css']
})
export class ViewUserByIdComponent implements OnInit{

  constructor(private leadServ:LeaderService,private search:LeaderSearchHomeComponent){ }

  user:any;

  ngOnInit(): void {

    console.log(this.search.userId);
    /* Fetching User Details */
    this.leadServ.getUserById(this.search.userId).subscribe(
      res=>{
        console.log(res);
        this.user = res;
        JSON.stringify(this.user.skillId).replaceAll(/[""{}]/g,"").replaceAll(":"," ").split(",")
          .forEach(element=>{
            if(element.startsWith('name')){
              this.user['skillId']= element.substring(5);
            }
        })

        JSON.stringify(this.user.industryId).replaceAll(/[""{}]/g,"").replaceAll(":"," ").split(",")
          .forEach(element=>{
            if(element.startsWith('name')){
              this.user['industryId']= element.substring(5);
            }
        })

        JSON.stringify(this.user.locationId).replaceAll(/[""{}]/g,"").replaceAll(":"," ").split(",")
          .forEach(element=>{
            if(element.startsWith('name')){
              this.user['locationId']= element.substring(5);
            }
        })

      },
      err=>{ console.log(err);}
    )
  }

  closeUser(){
    this.search.display2=false;
    this.search.displayfollowerDetails=false;
  }

}