import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/shered/header/header.component';
import { BookCardComponent } from './components/core/book-card/book-card.component';
import { BooklistComponent } from './components/core/booklist/booklist.component';
import {HttpClientModule} from '@angular/common/http';
import { ChartComponent } from './components/core/chart/chart.component';
import { PaymentComponent } from './components/core/payment/payment.component';
import { ModalComponent } from './components/pages/modal/modal.component';
import { AddBookComponent } from './components/core/add-book/add-book.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { SerchComponent } from './components/core/serch/serch.component';
import { CartUserComponent } from './components/core/cart-user/cart-user.component';
import { SearchUserComponent } from './components/core/search-user/search-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    BookCardComponent,
    BooklistComponent,
    ChartComponent,
    PaymentComponent,
    ModalComponent,
    AddBookComponent,
    PageNotFoundComponent,
    SerchComponent,
    CartUserComponent,
    SearchUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
