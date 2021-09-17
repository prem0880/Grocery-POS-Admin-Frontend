import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ViewCategoryComponent } from './components/category/view-category/view-category.component';
import { ManageCategoryComponent } from './components/category/manage-category/manage-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { ManageProductComponent } from './components/product/manage-product/manage-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { CategoryService } from './services/category/category.service';
import { ProductService } from './services/product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './components/admin/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    ManageCategoryComponent,
    UpdateCategoryComponent,
    AddProductComponent,
    ViewProductComponent,
    ManageProductComponent,
    UpdateProductComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [CategoryService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
