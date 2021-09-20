import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory, InventoryService } from 'src/app/services/inventory/inventory.service';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css']
})
export class ViewInventoryComponent implements OnInit {

  public inventory:any=[];
  public today:Date=new Date();
  constructor(private inventoryService : InventoryService,private router:Router) { }

  ngOnInit(): void {

    this.inventoryService.getAllInventory().subscribe((res)=>{
      this.inventory = res;
    });
  }



}
