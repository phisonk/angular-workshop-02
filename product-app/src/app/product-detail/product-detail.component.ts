import { Component, OnInit, Input, Type } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
type Products = Product[];
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  pageName = 'ProductDetail';

  constructor(private route: ActivatedRoute, public service: ProductService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.service.getAllProductLocal().subscribe((products) => {
        this.product = products.filter((p) => p.code === params.get('id'))[0];
      });
    });
  }
}
