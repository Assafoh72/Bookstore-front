import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from '../data/book.interfaces';
import { BehaviorSubject, Observable, Subject, forkJoin } from 'rxjs';
import { BooklistComponent } from '../booklist/booklist.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _chartBook = new BehaviorSubject<book[]>([])
  chartBook = this._chartBook.asObservable();

  private _cartBookUser = new BehaviorSubject<book[]>([]);
  cartBookUser = this._cartBookUser.asObservable()

  // private booksList = new BehaviorSubject<book[]>([])
  // _

  allBook:number[] = [0,1,2,3,4,5,6,7,8,9];



  private keyword: string = "";

  updateKeyword(newKeyword: string){
    this.keyword = newKeyword;
  }
  getKeyword(){
    return this.keyword
  }




  constructor(private httpClient: HttpClient) { }



    getBooksList() {
      console.log("in function getBooksList()");
      return this.httpClient.get<book[]>('http://localhost:3000/books')
    }

    updateAddedToChart(id: number, status: boolean): boolean {
      const addres:string = 'http://localhost:3000/books/' + id;
      this.httpClient.patch(addres, {addedToChart: status}).subscribe((el)=>console.log('this os the response', el));
      return true
    }

    updateAddedToCartUser(id: number, status: boolean): boolean {
      const addres:string = 'http://localhost:3000/books/' + id;
      this.httpClient.patch(addres, {addedToUserCart: status}).subscribe((el)=>console.log('this os the response', el));
      return true
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

    updateBookCartUser (updatedBooks:book[]){
      this._cartBookUser.next(updatedBooks)
    }

    getCartBookUser() {
      return this.httpClient.get<book[]>('http://localhost:3000/books', {
        params: {
          addedToUserCart: 'true' //////
        }
      }).subscribe((res)=>{
        this._cartBookUser.next(res)
      });
    }
//

//

    // getSerchBook() {
    //   return this.httpClient.get<book[]>('http://localhost:3000/books', {
    //     params: {
    //       addedToChart: 'true'
    //     }
    //   }).subscribe((res)=>{
    //     this._chartBook.next(res)
    //   });
    // }





    // updateAddedToMyBook(id: number, status: boolean) {
    //   const addres:string = 'http://localhost:3000/books/' + id;
    //   this.httpClient.patch(addres, {addedToMyBook: status}).subscribe((el)=>console.log('this os the response', el));
    // }

    // onRemoveAllCartBooks() {
    //   this.httpClient.get<book[]>('http://localhost:3000/books').subscribe((allBooks) => {
    //     for (let book of allBooks) {
    //       if (book.addedToChart === true) {
    //         const address: string = 'http://localhost:3000/books/' + book.id;
    //         this.httpClient.patch(address, { addedToChart: false }).subscribe((response) => {
    //           console.log('Response from addedToChart update:', response);
    //         });
    //       }
    //     }
    //   });
    // }


    // onRemoveAllCartBooks() {
    //   console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

    //   // this.httpClient.get<book[]>('http://localhost:3000/books').subscribe((allBooks) => {
    //   //   this.allBook = allBooks;
    //   // });
    //   for(let book of this.allBook){
    //     if(this.updateAddedToChart(+book, false)){
    //       continue
    //     }
    //     else{
    //     }
    //     return

    //   }

    // }



    // onRemoveAllCartBooks() {
    //   this.httpClient.get<book[]>('http://localhost:3000/books').subscribe((allBooks) => {
    //     const updateObservables = [];

    //     for (let book of allBooks) {
    //       if (book.addedToChart === true) {
    //         const address: string = 'http://localhost:3000/books/' + book.id;
    //         const updateObservable = this.httpClient.patch(address, { addedToChart: false });
    //         updateObservables.push(updateObservable);
    //       }
    //     }

    //     if (updateObservables.length > 0) {
    //       forkJoin(updateObservables).subscribe((responses) => {
    //         console.log('Responses from addedToChart update:', responses);
    //       });
    //     }
    //   });
    // }

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

  totalPrice!: number;
  priceAfterDiscount!: number;
  discountPercentage: number = 0;

  getDiscountPercentage(){
    return this.discountPercentage;
  }

  setDiscountPercentage(percentage: number){
    this.discountPercentage = percentage;
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

