import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ManageCategoryComponent } from './components/category/manage-category/manage-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { ViewCategoryComponent } from './components/category/view-category/view-category.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ManageProductComponent } from './components/product/manage-product/manage-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent},
  {path:"addCategory",component:AddCategoryComponent},
  {path:"viewCategory",component:ViewCategoryComponent},
  {path:"manageCategory",component:ManageCategoryComponent},
  {path:"updateCategory",component:UpdateCategoryComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"viewProduct",component:ViewProductComponent},
  {path:"manageProduct",component:ManageProductComponent},
  {path:"updateProduct",component:UpdateProductComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
