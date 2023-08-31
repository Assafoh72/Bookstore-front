import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { Router } from '@angular/router';
import { UserInfoService } from '../../core/service/user-info.service';
import { passwordValidator } from '../../core/service/password.validator';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  form!: FormGroup;
  constructor(
    private router: Router,
    private userInfoService: UserInfoService
    ) {}

  ngOnInit(): void {
    this.form = new FormGroup ({
      name: new FormControl ('', Validators.required ),
      email: new FormControl ('', [Validators.required, Validators.email] ),
      password: new FormControl ('', [Validators.required, passwordValidator()])
    });
  }
  handleSubmit(): void {
    const name = this.form.value.name
    const email = this.form.value.email
    const password = this.form.value.password
    this.userInfoService.storeUserInfo (email, password, name)
    this.userInfoService.updateIsUserLogedIn(true);
    console.log(this.userInfoService.getIsUserLogedIn());

    this.userInfoService.updateIsUserLogedInGuard(true)
    this.router.navigate(['/books-list']);

  }

  isInputValid(form:FormGroup, input: string): boolean{
    return !(!form.get(input)?.valid && form.get(input)?.touched)
  }
}
