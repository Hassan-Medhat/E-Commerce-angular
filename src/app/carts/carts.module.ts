import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    SharedModule,
    
  ]
})
export class CartsModule { }
