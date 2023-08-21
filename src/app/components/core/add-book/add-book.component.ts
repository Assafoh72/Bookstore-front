import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../service/book.service';
import { first } from 'rxjs';
import { book } from '../data/book.interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {


  IsErrorDisplay: Boolean = false;

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private bookService: BookService, private router: Router) {

    // this.form = this.formBuilder.group({
    //   title: ['', Validators.required],
    //   category: ['', Validators.required],
    //   publisher: ['', Validators.required],


    //   datePublished: ['', Validators.required],
    //   language: ['', Validators.required],
    //   bestsellerRating: ['', Validators.required],
    //   CustomerRating: ['', Validators.required],
    //   numberOfPages: ['', Validators.required],
    //   weight: ['', Validators.required],
    //   price: ['', Validators.required]
    // });
  }

   ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      publisher: ['', Validators.required],


      datePublished: ['', Validators.required],
      language: ['', Validators.required],
      bestsellerRating: ['', Validators.required],
      CustomerRating: ['', Validators.required],
      numberOfPages: ['', Validators.required],
      weight: ['', Validators.required],
      price: ['', Validators.required]
    });


    this.bookService.getBooksList().pipe(first()).subscribe((books) => {
      this.bookList = books;
    })
  }


  updateIsErrorDisplay() {
    this.IsErrorDisplay =true;
  }
  private bookList: book[] =[];

  handleSubmit(): void {

    // this.router.navigate(['/books-list']);


    const title = this.form.value.title;
    const category = this.form.value.category;
    const publisher = this.form.value.publisher;


    const datePublished = this.form.value.datePublished;
    const language = this.form.value.language;
    const bestsellerRating = this.form.value.bestsellerRating;
    const CustomerRating = this.form.value.CustomerRating;
    const numberOfPages = this.form.value.numberOfPages;
    const weight = this.form.value.weight;
    const price = this.form.value.price;

    const newBookObj: book = {
      Title: title,
      id: "15",
      category: category,
      publisher: publisher,
      datePublished: datePublished,
      language: language,
      bestsellerRating: bestsellerRating,
      CustomerRating: CustomerRating,
      numberOfPages: numberOfPages,
      weight: weight,
      addedToChart: false,
      price: price,
    }

    // this.bookService.getBooksList().pipe(first()).subscribe((books) => {
    //   this.bookList = books;
    // })
    console.log("newBook: ", newBookObj );
    console.log("bookList: ", this.bookList );


    this.bookList.push(newBookObj)
    console.log("bookList: ", this.bookList );

    this.bookService.onAddBook(newBookObj)

    // console.log(this.bookList);

    this.router.navigate(['/books-list']);


  }


}
