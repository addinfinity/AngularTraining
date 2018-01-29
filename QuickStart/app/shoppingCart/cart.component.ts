import { Component } from '@angular/core';
import { Product } from './product';

@Component({
    selector: 'cart',
    templateUrl: './app/shoppingCart/cart.component.html'
})

export class CartComponent {
    // var cars2: Array<number> = new Array<number>(100, 2000);
    products = [new Product("product1", 100, 3,"https://material.io/guidelines/static/spec/images/callouts/default.svg"),
        new Product("product2", 100, 2, "https://lh3.googleusercontent.com/ygfbsuk75s_UxGQTDgRxle9XuLrzVqlU3pgVtEjXLVMKijaKsr78jMi2i7Lm2_YZTPI=w300"),
        new Product("product2", 100, 1, "https://creativecommons.org/wp-content/uploads/2016/06/brain.png")
];
    // ,
    // { name: 'PRoduct2', price: 2000 },
    // { name: 'Product3', price: 3000 }];
}