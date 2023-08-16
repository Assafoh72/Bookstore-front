import { Component, OnInit } from '@angular/core';
import { book } from '../data/book.interfaces';
import { BookService } from '../service/book.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit {
  constructor (private bookService: BookService) {}
  ngOnInit(): void {
    this.bookService.getMyBook();
    this.myBookSub = this.bookService.myBook.subscribe((val)=>{
        this.myBook = val;
        this.updatePage()
        console.log('myBook: ' ,this.myBook);
      })

  }

  myBook: book[] = [];
  myBookSub!:Subscription

  displayedBooks: book[] = [];
  itemsPerPage: number = 6;
  currentPage: number = 1;
  totalPages: number = Math.max((Math.ceil(this.myBook.length/6)),1);

  


  updatePage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedBooks = this.myBook.slice(startIndex, endIndex);
    this.totalPages =  Math.max((Math.ceil(this.myBook.length/6)),1);
  }

  // updatePage() {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   this.displayedBooks = this.bookChart.slice(startIndex, endIndex);
  //   this.totalPages =  Math.max((Math.ceil(this.bookChart.length/6)),1);
  // }

  nextPage() {
    this.currentPage++;
    this.updatePage();
  }

  prevPage() {
    this.currentPage--;
    this.updatePage();
  }
}
