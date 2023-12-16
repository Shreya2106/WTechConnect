import { Component } from '@angular/core';
import { LeaderSearchHomeComponent } from '../leader-search-home/leader-search-home.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {

  constructor(public search:LeaderSearchHomeComponent,private comm:CommonService){ }

  filter_req(){
    this.search.filter = true;
    console.log("Called")
    this.search.d = (<HTMLInputElement>document.getElementById("filter_opt")).value;
    if(this.search.d=="skill"){
      this.comm.fetchSkills().subscribe(
        res=>{ this.search.data = res; },
        err =>{ console.log(err); }
      )
    }
    else if(this.search.d=="industry"){
      this.comm.fetchIndustry().subscribe(
        res=>{ this.search.data = res; },
        err =>{ console.log(err); }
      )
    }
    else if(this.search.d=="location"){
      this.comm.fetchLocations().subscribe(
        res=>{ this.search.data = res; },
        err =>{ console.log(err); }
      )
    }
    else{
      this.search.filter=false;
      this.search.filterreq1=false;
    }
  }

  filter_done(){
    this.search.val = (<HTMLInputElement>document.getElementById("filter_val")).value;
    console.log("Requested Filter ",this.search.d," and value is ",this.search.val);
    this.search.filterId=this.search.val;
    this.search.filterType=this.search.d;
    this.search.filterreq1=true;
  }
}
