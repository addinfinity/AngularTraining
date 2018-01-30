import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { CourseComponent } from './course.component';
import { ProductComponent } from './shoppingCart/product.component';
import { CartComponent } from './shoppingCart/cart.component';
import { StockPipe } from './shoppingCart/custom.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CourseComponent, ProductComponent, CartComponent, StockPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
