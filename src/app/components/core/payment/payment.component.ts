import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  form!: FormGroup;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.form = new FormGroup ({
      name: new FormControl ('', Validators.required ),
      credit: new FormControl ('', Validators.required ),
      id: new FormControl ('', Validators.required),
      date: new FormControl ('', Validators.required)
    });

  }
  handleSubmit(): void {
    // const name = this.form.value.name
    // const Credit = this.form.value.email
    // const password = this.form.value.password
    this.router.navigate(['/my-books']);
  }

  isInputValid(form:FormGroup, input: string): boolean{
    return !(!form.get(input)?.valid && form.get(input)?.touched)
  }
}
