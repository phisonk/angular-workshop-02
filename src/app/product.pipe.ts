import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';

@Pipe({
  name: 'product',
})
export class ProductPipe implements PipeTransform {
  transform(products: Product[], name: string): Product[] {
    return products.filter(
      (p) => p.name.toUpperCase().indexOf(name.toUpperCase()) !== -1
    );
  }
}
