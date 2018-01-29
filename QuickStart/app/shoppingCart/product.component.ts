import { Component, Input } from '@angular/core';
import { Product} from '../shoppingCart/product';
@Component({
    selector: 'product',
    templateUrl: './app/shoppingCart/product.component.html'
})

export class ProductComponent{
    @Input() product: Product=new Product();
}