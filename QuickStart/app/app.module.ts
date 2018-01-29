import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CourseComponent } from './course.component';
import { ProductComponent } from './shoppingCart/product.component';
import { CartComponent } from './shoppingCart/cart.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CourseComponent, ProductComponent, CartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
