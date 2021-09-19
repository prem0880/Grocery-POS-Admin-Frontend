import { Component, OnInit } from '@angular/core';
import { Inventory, InventoryService } from 'src/app/services/inventory/inventory.service';

@Component({
  selector: 'app-view-inventory-by-price',
  templateUrl: './view-inventory-by-price.component.html',
  styleUrls: ['./view-inventory-by-price.component.css']
})
export class ViewInventoryByPriceComponent implements OnInit {

  public inventory : any=[];
  constructor(private inventService : InventoryService) { }

  ngOnInit(): void {
  }

  getInventory(start:any, end:any) {
    this.inventService.getInventoryByPrice(start,end).subscribe((res)=>{
      this.inventory = res;
    })
  }
}
