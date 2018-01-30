import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
//import { Form } from '@angular/forms';

@Component({
    selector: 'cart',
    templateUrl: './app/shoppingCart/cart.component.html',
    styles: [`
        input.ng-pristine.ng-invalid{
            background-color:pink;
        }

        input.ng-dirty.ng-invalid{
            border: 2px solid red;
        }

        input.ng-dirty.ng-valid{
            background-color:lightgreen;
        }
    `]
})

export class CartComponent {

    heading: string = "Shopping cart"
    isSuccess: boolean = true;

    newProduct: Product = new Product();
    
    companyToSearch:string = "";
    productToSearch:string = "";
    
    // products = [new Product("product1", 100, 3.9, 2, '01/10/2017', "https://material.io/guidelines/static/spec/images/callouts/default.svg"),
    //     new Product("product2", 100, 2.2780, 5, '01/10/2017', "https://lh3.googleusercontent.com/ygfbsuk75s_UxGQTDgRxle9XuLrzVqlU3pgVtEjXLVMKijaKsr78jMi2i7Lm2_YZTPI=w300"),
    //     new Product("product3", 100, 1.6, 3, '01/10/2017', "https://creativecommons.org/wp-content/uploads/2016/06/brain.png")
    // ];
    products:Product[] = [];

    constructor(private servObj:ProductService){
        this.products = servObj.getProducts();
    }
    changeHeading() {
        this.heading = this.heading + this.products.length;
    }

    headingOnChange(e: any) {
        console.log(e.target.value);
        this.heading = e.target.value;
    }

    SaveProduct(theForm: any) {

        // if (theForm.valid) {
        //     let productToBeInserted = new Product();
        //     productToBeInserted.name = this.newProduct.name;
        //     productToBeInserted.price = this.newProduct.price;
        //     productToBeInserted.rating = this.newProduct.rating;
        //     productToBeInserted.stockLasts = this.newProduct.stockLasts;
        //     productToBeInserted.launchDate = this.newProduct.launchDate;

        //     this.products.push(productToBeInserted);
        //     this.newProduct = new Product();
        //     theForm.reset();
        // }

        if(theForm.valid)
        {
            let productToBeInserted = new Product();
            productToBeInserted.name = this.newProduct.name;
            productToBeInserted.price = this.newProduct.price;
            productToBeInserted.rating = this.newProduct.rating;
            productToBeInserted.stockLasts = this.newProduct.stockLasts;
            productToBeInserted.launchDate = this.newProduct.launchDate;

            this.servObj.insert(productToBeInserted);
            theForm.reset();
        }
    }
}