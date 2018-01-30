import { Component, Input, style } from '@angular/core';
import { Product} from '../shoppingCart/product';
@Component({
    selector: 'product',
    templateUrl: './app/shoppingCart/product.component.html',
    styles:[`
        .productStyle{
                border:1px solid black;
                border-radius: 20px;
                paddding: 5px;
                margin: 5px;
        }
        div{
            margin: 5px;
        }
    `]
})

export class ProductComponent{
    @Input() product: Product=new Product();
}