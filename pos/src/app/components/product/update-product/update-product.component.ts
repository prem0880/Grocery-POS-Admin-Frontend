import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { Product, ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  public category:any=[];
  public categoryObj: any=[] ;
  id:any;

  constructor(private router : Router,private categoryService:CategoryService,private productService:ProductService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      id : any
    };
    this.id = state.id;
   }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe( response => {
      this.category = response;
  });
  }

  getCategory(cid:number){

    this.categoryObj={"id":cid};
    console.log(this.categoryObj);
    
    }

  updateProduct(product:Product) {
    this.getCategory(product.category as any as number);
    product.category=this.categoryObj;
    console.log(product);
    this.productService.updateProduct(this.id,product).subscribe((response) => {
      window.alert(response);
    })
  }


}
