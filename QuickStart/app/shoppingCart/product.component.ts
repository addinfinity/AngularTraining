import { Component, Input, style } from '@angular/core';
import { Product} from '../shoppingCart/product';
@Component({
    selector: 'product',
    templateUrl: './app/shoppingCart/product.component.html',
    styles:[`
        .productStyle{
                border: 2px solid red;
                border-radius: 20px;
                paddding: 20px;
                margin: 20px;
        }
        div{
            margin: 5px;
        }
    `]
})

export class ProductComponent{
    @Input() product: Product=new Product();
}