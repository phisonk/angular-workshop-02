import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

type Products = Product[];
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}
  productList: Products = [];
  filterData = '';
  ngOnInit(): void {
    const item1 = new Product('0001', 'Name 01', 10, true, 5, 'xxx');
    const item2 = new Product('0002', 'Name 02', 50, true, 3, 'xxx');
    const item3 = new Product('0003', 'Name 03', 90, true, 4, 'xxx');
    this.productList.push(item1, item2, item3);
  }
}
