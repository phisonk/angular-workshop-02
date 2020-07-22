import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
declare var jQuery: any;
type Products = Product[];
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(public service: ProductService) {}
  productList: Products = [];
  productSelected: Product;
  filterData = '';
  ngOnInit(): void {
    // this.productList = this.service.getAllProduct();
    this.getAll();
  }

  getAll(): void {
    this.service.getAllProductLocal().subscribe((products) => {
      return (this.productList = products);
    });
  }
  onRatingClicked(message: string): void {
    alert(message);
  }
  open(product: Product): void {
    console.log('able to click');
    this.productSelected = product;
  }
}
