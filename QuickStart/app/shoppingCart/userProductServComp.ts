import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    selector: `useProdServ`,
    // template: `<h1> Use product service </h1>`,
    templateUrl: './app/shoppingCart/useProductServ.component.html',
    //providers:[ProductService]
})

export class UseProductServComponent{

    productName:string = "";
    productToAdd:string = "";

    constructor(private servObj: ProductService){
    }

    getProduct():void{
        this.productName = this.servObj.getRandomProduct();
        console.log(this.productName);
    }

    addProduct():void{
        this.servObj.insert(this.productToAdd);
        console.log(            
        this.servObj.getProducts()
        );
    }
}