import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from 'src/app/auth.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ProductListComponent },
  {
    path: 'list/:name',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
