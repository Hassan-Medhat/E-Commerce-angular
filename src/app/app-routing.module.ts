import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/cart/cart.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { AllproductsComponent } from './products/allproducts/allproducts.component';
import { ProductsdetailsComponent } from './products/productsdetails/productsdetails.component';
import { MainComponent } from './home/main/main.component';

const routes: Routes = [
  {path:'home' , component:MainComponent},
  {path:'' , redirectTo:'/home' , pathMatch:'full'},
  {path:'products' , component:AllproductsComponent},
  {path:'details/:id' , component:ProductsdetailsComponent},
  {path:'cart' , component:CartComponent},
  {path:'**' , component:NotfoundpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
