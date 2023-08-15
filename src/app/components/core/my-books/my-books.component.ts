import { Component, OnInit } from '@angular/core';
import { book } from '../data/book.interfaces';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit {
  ngOnInit(): void {

  }

  MyBook: book[] = [];
  displayedBooks: book[] = [];
  itemsPerPage: number = 6;
  currentPage: number = 1;
  totalPages: number = Math.max((Math.ceil(this.MyBook.length/6)),1);



  updatePage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedBooks = this.MyBook.slice(startIndex, endIndex);
    this.totalPages =  Math.max((Math.ceil(this.MyBook.length/6)),1);
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