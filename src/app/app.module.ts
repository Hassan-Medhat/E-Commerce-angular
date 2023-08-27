import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
    AppComponent,
    NotfoundpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    CartsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
