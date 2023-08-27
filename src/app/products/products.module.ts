import { NgModule } from '@angular/core';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';




@NgModule({
  declarations: [
    AllproductsComponent,
    ProductsdetailsComponent,
    ProductComponent
  ],
  imports: [
    SharedModule

  ]
})
export class ProductsModule { }
