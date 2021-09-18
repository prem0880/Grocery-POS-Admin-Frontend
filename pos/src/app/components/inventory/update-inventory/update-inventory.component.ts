import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory, InventoryService } from 'src/app/services/inventory/inventory.service';


@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit {

  public id:any;
 
  constructor(private router : Router, private inventService : InventoryService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      id : any
      
    };
    this.id = state.id;
    console.log(this.id);
   }

  ngOnInit(): void {
  }

  updateInventory(invent : Inventory) {
    this.inventService.updateInventory(this.id, invent).subscribe((res) =>{
      window.alert(res);
      this.router.navigate(["manageinventory"]);
    });
  }
}
