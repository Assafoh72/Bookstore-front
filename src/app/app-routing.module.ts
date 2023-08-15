import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { BooklistComponent } from './components/core/booklist/booklist.component';
import { ChartComponent } from './components/core/chart/chart.component';
import { MyBooksComponent } from './components/core/my-books/my-books.component';
import { PaymentComponent } from './components/core/payment/payment.component';

const routes: Routes = [
  {path: 'log-in', component:  LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'books-list', component: BooklistComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'my-books', component: MyBooksComponent},
  {path: 'payment', component: PaymentComponent},

  {path: '', redirectTo: 'log-in', pathMatch: 'full'},
  // {path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
