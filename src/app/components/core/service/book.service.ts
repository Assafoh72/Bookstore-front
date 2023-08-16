import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from '../data/book.interfaces';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _chartBook = new BehaviorSubject<book[]>([])
  chartBook = this._chartBook.asObservable()

  private _myBook = new BehaviorSubject<book[]>([])
  myBook = this._myBook.asObservable()

  constructor(private httpClient: HttpClient) { }


    getBooksList() {
      return this.httpClient.get<book[]>('http://localhost:3000/books')
    }

    updateAddedToChart(id: number, status: boolean) {
      const addres:string = 'http://localhost:3000/books/' + id;
      this.httpClient.patch(addres, {addedToChart: status}).subscribe((el)=>console.log('this os the response', el));
    }

    updateBookChart (updatedBooks:book[]){
      this._chartBook.next(updatedBooks)
    }

    getChartBook() {
      return this.httpClient.get<book[]>('http://localhost:3000/books', {
        params: {
          addedToChart: 'true'
        }
      }).subscribe((res)=>{
        this._chartBook.next(res)
      });
    }

    getMyBook(){
      return this.httpClient.get<book[]>('http://localhost:3000/books', {
        params: {
          addedToMyBook: 'true'
        }
      }).subscribe((res)=>{
        this._myBook.next(res)
      });

    }

    updateAddedToMyBook(id: number, status: boolean) {
      const addres:string = 'http://localhost:3000/books/' + id;
      this.httpClient.patch(addres, {addedToMyBook: status}).subscribe((el)=>console.log('this os the response', el));
    }

    updateMyBook (updatedBooks:book[]){
      this._myBook.next(updatedBooks)
    }

    onRemoveAllCartBooks() {
      this.httpClient.get<book[]>('http://localhost:3000/books').subscribe((allBooks) => {
        for (let book of allBooks) {
          if (book.addedToChart === true) {
            const address: string = 'http://localhost:3000/books/' + book.id;

            // Update the book's properties
            this.httpClient.patch(address, { addedToChart: false }).subscribe((response) => {
              console.log('Response from addedToChart update:', response);
            });

            this.httpClient.patch(address, { addedToMyBook: true }).subscribe((response) => {
              console.log('Response from addedToMyBook update:', response);
            });
          }
        }
        this.updateMyBook(allBooks);
      });

    }


// onRemoveAllCartBooks(idOfChartBook: number[]){
//   const allBook = this.httpClient.get<book[]>('http://localhost:3000/books')
//   for(let number of allBook){
//     const addres:string = 'http://localhost:3000/books/' + number;
//     this.httpClient.patch(addres, {addedToChart: false}).subscribe((el)=>console.log('this os the response', el));
//     this.httpClient.patch(addres, {addedToMyBook: true}).subscribe((el)=>console.log('this os the response', el));

//   }
// }



}

