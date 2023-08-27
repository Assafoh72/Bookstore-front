import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { BooklistComponent } from './components/core/booklist/booklist.component';
import { ChartComponent } from './components/core/chart/chart.component';
import { PaymentComponent } from './components/core/payment/payment.component';
import { AddBookComponent } from './components/core/add-book/add-book.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { SerchComponent } from './components/core/serch/serch.component';
import { CartUserComponent } from './components/core/cart-user/cart-user.component';

const routes: Routes = [
  {path: 'log-in', component:  LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'books-list', component: BooklistComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'serch', component: SerchComponent},
  {path: 'user-cart', component: CartUserComponent},

  {path: '', redirectTo: 'log-in', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
