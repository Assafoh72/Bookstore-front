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




  constructor(private httpClient: HttpClient) { }



    getBooksList() {
      console.log("in function getBooksList()");
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


    updateAddedToMyBook(id: number, status: boolean) {
      const addres:string = 'http://localhost:3000/books/' + id;
      this.httpClient.patch(addres, {addedToMyBook: status}).subscribe((el)=>console.log('this os the response', el));
    }

    onRemoveAllCartBooks() {
      this.httpClient.get<book[]>('http://localhost:3000/books').subscribe((allBooks) => {
        for (let book of allBooks) {
          if (book.addedToChart === true) {
            const address: string = 'http://localhost:3000/books/' + book.id;

            this.httpClient.patch(address, { addedToChart: false }).subscribe((response) => {
              console.log('Response from addedToChart update:', response);
            });

          }
        }
        // this.getBooksList()
      });

        // this.getBooksList()///////////


    }

  onDeleteBook(id: number) {
      const address: string = 'http://localhost:3000/books/' + id;
      this.httpClient.delete(address).subscribe(
          () => {
              console.log('Book deleted successfully');
          },
          (error) => {
              console.error('Error deleting book:', error);
          }
      );
  }

  onAddBook(newBook: book) {
    const address: string = 'http://localhost:3000/books/';
    this.httpClient.post('http://localhost:3000/books/', newBook).subscribe(
        () => {
            console.log('Book Add successfully');
        },
        (error) => {
            console.error('Error Adding book:', error);
        }
    );
}








  onUpdatePrice(id: number, newPrice: number) {
    const addres:string = 'http://localhost:3000/books/' + id;
    this.httpClient.patch(addres, {newPrice: newPrice}).subscribe((el)=>console.log('this os the response', el));
  }

  onUpdateTitle(id: number, newTitle: string) {
    const addres:string = 'http://localhost:3000/books/' + id;
    this.httpClient.patch(addres, {Title: newTitle}).subscribe((el)=>console.log('this os the response', el));
  }





}

