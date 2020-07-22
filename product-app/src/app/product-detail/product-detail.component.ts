import { Component, OnInit, Input, Type } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
type Products = Product[];
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @Input() products: Products;
  product: Product;
  pageName = 'ProductDetail';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) =>
        (this.product = this.products.filter(
          (p) => p.code === params.get('id')
        )[0])
    );
  }
}
