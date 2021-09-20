import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/staff/customer/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  public viewCustomer?:any=[];


  constructor(private customerService:CustomerService) { }

  ngOnInit():any {
    this.customerService.getAllCustomer().subscribe( response => {
      this.viewCustomer = response;
      console.log(this.viewCustomer);
  });
  }



}
