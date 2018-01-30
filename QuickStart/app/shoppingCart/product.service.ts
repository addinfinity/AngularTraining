import { Injectable } from '@angular/core';
import { Product } from './product';

export class ProductService {

    //products:string[] = ['Mobile', 'Camera', 'TV'];
    products = [new Product("product1", 100, 3.9, 2, '01/10/2017', "https://material.io/guidelines/static/spec/images/callouts/default.svg"),
    new Product("product2", 100, 2.2780, 5, '01/10/2017', "https://lh3.googleusercontent.com/ygfbsuk75s_UxGQTDgRxle9XuLrzVqlU3pgVtEjXLVMKijaKsr78jMi2i7Lm2_YZTPI=w300"),
    new Product("product3", 100, 1.6, 3, '01/10/2017', "https://creativecommons.org/wp-content/uploads/2016/06/brain.png")
    ];
    
    getProducts(): Product[]{
        console.log("returning products");
        return this.products;
    }

    insert(newProduct: Product):void{
        this.products.push(newProduct);
    }

    getRandomProduct(): Product{
        return this.products[Math.floor(Math.random() * this.products.length)];
    }
}