import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { CourseComponent } from './course.component';
import { ProductComponent } from './shoppingCart/product.component';
import { CartComponent } from './shoppingCart/cart.component';
import { StockPipe } from './shoppingCart/custom.pipe';
import { UseProductServComponent } from './shoppingCart/userProductServComp';
import { ProductService } from './shoppingCart/product.service';
import { HttpModule } from '@angular/http';
import { PostsComponent } from './shoppingCart/post.component';
import { Routes,RouterModule } from "@angular/router";
import { PostDetailsComponent } from './shoppingCart/postdetail.component';

const appRoutes: Routes=[

  { path: 'posts', component: PostsComponent },
  { path: 'view/:id', component: PostDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/cart', pathMatch: 'full' },
  { path: '**', redirectTo:'/posts', pathMatch:'full' }
];

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, 
    RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, 
                  CourseComponent, 
                  ProductComponent, 
                  CartComponent, 
                  StockPipe, 
                  UseProductServComponent,
                  PostsComponent,
                  PostDetailsComponent ],  
  bootstrap:    [ AppComponent ],
  providers:    [ ProductService ]
})
export class AppModule { }
