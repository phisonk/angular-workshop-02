import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
type Products = Product[];
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAllProduct(): Products {
    const productList: Products = [];
    const item1 = new Product('0001', 'Name 01', 10, true, 5, 'xxx');
    const item2 = new Product('0002', 'Name 02', 50, true, 3, 'xxx');
    const item3 = new Product('0003', 'Name 03', 90, true, 4, 'xxx');
    productList.push(item1, item2, item3);
    return productList;
  }
  getAllProductLocal(): Observable<Products> {
    const item1 = new Product(
      '0001',
      'Name 01',
      10,
      true,
      5,
      'https://www.apple.com/v/iphone/home/al/images/overview/hero/hero_iphone_se__barrz3dlvxea_small_2x.jpg'
    );
    const item2 = new Product(
      '0002',
      'Name 02',
      50,
      true,
      3,
      'https://www.apple.com/v/iphone/home/al/images/overview/accessories/iphone_airpods_engraving__b3umcc5tz5o2_small_2x.jpg'
    );
    const item3 = new Product(
      '0003',
      'Name 03',
      90,
      true,
      4,
      'https://www.apple.com/th/ipad/home/images/overview/ipad_air__c8xht6h7g7au_small_2x.jpg'
    );
    return of([item1, item2, item3]);
  }
  getAllProoduct(): Observable<Products> {
    return this.http.get<Products>('https://165.22.255.58:3000/products');
  }
}
