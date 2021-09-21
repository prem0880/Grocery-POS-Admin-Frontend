import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/staff/customer/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  public viewcustomer?:any=[];

  public display:boolean=false;


  constructor(private customerService:CustomerService) { }

  ngOnInit():void {

  }

  getCustomerById(id:any){
    this.customerService.getCustomerById(id.phoneNumber).subscribe( response => {
      this.viewcustomer = response;
      this.display=true;
      console.log(this.viewcustomer);
  });
  }

}
