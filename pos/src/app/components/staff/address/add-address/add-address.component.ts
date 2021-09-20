import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/app/services/country/country.service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  public id : any;
  public state  :any=[];
  public country : any=[];
  constructor(private router : Router, private route: ActivatedRoute, private stateser : StateService, private countSer  :CountryService) { 
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.countSer.get().subscribe((res)=>{
      this.country = res;
    })
  }

  getstate(id:any) {
    console.log(id);
    this.stateser.get(id).subscribe((res)=>{
      this.state = res;
    })
  }
  addaddress(value:any) {
    
  }

}
