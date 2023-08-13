import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { BooklistComponent } from './components/core/booklist/booklist.component';

const routes: Routes = [
  {path: 'log-in', component:  LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'books-list', component: BooklistComponent},


  {path: '', redirectTo: 'log-in', pathMatch: 'full'},
  // {path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
