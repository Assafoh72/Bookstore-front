import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { UserInfoService } from '../../core/service/user-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form!: FormGroup;
  constructor(private router: Router, private userInfoService: UserInfoService) {}

  ngOnInit(): void {
    this.form = new FormGroup ({
      email: new FormControl ('', [Validators.required, Validators.email] ),
      password: new FormControl ('', Validators.required)
    });
  }
  handleSubmit(): void {
    console.log(this.form)
    if (this.isEmailAndPasswordValid()){
      this.userInfoService.updateIsUserLogedIn(true)
      this.userInfoService.updateIsMyHeroesComponentOpen(false)
      this.router.navigate(['/app-heroes-list']);
    }
    else {
      this.displayErrorMessageEmailOrPassword = true
    }
  }

  isEmailAndPasswordValid(): boolean{
    const email = this.form.value.email
    const password = this.form.value.password
    const userInfo = this.userInfoService.getUserInfo()
    return email === userInfo?.email && password === userInfo?.password
  }
  isEmailValid(form:FormGroup): boolean{
    return !(!form.get('email')?.valid && form.get('email')?.touched)
  }

  displayErrorMessageEmailOrPassword = false

}
