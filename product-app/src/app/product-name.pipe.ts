import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName',
})
export class ProductNamePipe implements PipeTransform {
  transform(value: string, character: string): unknown {
    return value.replace(character, '-');
  }
}
