import { Component, Input, OnInit } from '@angular/core';
import { book } from '../data/book.interfaces';
import { BookService } from '../service/book.service';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  constructor(private bookService: BookService){}
  ngOnInit(): void {
    console.log(this.book);
  }

  @Input()book!: book;
  @Input()books!: book[];
  @Input()myHeroesSubscription!: book[];

  isDisplayNone: boolean = true

  onShowOrHideContent(): void{
    this.isDisplayNone = !this.isDisplayNone
  }

  // saveToLocalStorage(): void {
  //   const heroesJson: string = JSON.stringify(this.books);
  //   localStorage.setItem('heroes', heroesJson);
  // }

  // geLocalStorage(): void {
  //   localStorage.getItem
  // }

  


}
