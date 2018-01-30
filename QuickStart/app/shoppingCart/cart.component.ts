import { Component } from '@angular/core';
import { Product } from './product';

@Component({
    selector: 'cart',
    templateUrl: './app/shoppingCart/cart.component.html'
})

export class CartComponent {

    heading:string = "Shopping cart"
    isSuccess:boolean = true;

    newProduct: Product = new Product();

    products = [new Product("product1", 100, 3.9, 2, "https://material.io/guidelines/static/spec/images/callouts/default.svg"),
    new Product("product2", 100, 2.2780, 5, "https://lh3.googleusercontent.com/ygfbsuk75s_UxGQTDgRxle9XuLrzVqlU3pgVtEjXLVMKijaKsr78jMi2i7Lm2_YZTPI=w300"),
    new Product("product2", 100, 1.6,3, "https://creativecommons.org/wp-content/uploads/2016/06/brain.png")
    ];

    changeHeading(){
        this.heading = this.heading + this.products.length;
    }

    headingOnChange(e:any){ 
        console.log(e.target.value);        
        this.heading = e.target.value;
    }

    SaveProduct(){
        let productToBeInserted = new Product();
        productToBeInserted.name = this.newProduct.name;
        productToBeInserted.price = this.newProduct.price;
        productToBeInserted.rating = this.newProduct.rating;
        productToBeInserted.stockLasts = this.newProduct.stockLasts;

        this.products.push(productToBeInserted);
        this.newProduct = new Product();
    }
}