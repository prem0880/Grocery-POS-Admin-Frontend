import { Component, OnInit } from '@angular/core';
import { Inventory, InventoryService } from 'src/app/services/inventory/inventory.service';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css']
})
export class ViewInventoryComponent implements OnInit {

  public inventory:any=[];

  constructor(private inventoryService : InventoryService) { }

  ngOnInit(): void {

    this.inventoryService.getAllInventory().subscribe((res)=>{
      this.inventory = res;
    });
  }

}
