import {Product} from './product.model';

export interface CartItem {
    item: Product;
    amount: number;
}
