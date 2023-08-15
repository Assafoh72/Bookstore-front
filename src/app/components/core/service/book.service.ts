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
      return this.httpClient.get<book[]>('http://localhost:3000/books')
    }

    updateAddedToChart(id: number, status: boolean) {
      const addres:string = 'http://localhost:3000/books/' + id;
    //   console.log(addres);

    //   fetch(addres, {
    //    method: 'PATCH',
    //    headers: {
    // 'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ addedToChart: status })
    //   });
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
    // console.log(res);
    this._chartBook.next(res)
  });
}

// getCharItemToDisplay(){
//   return this.httpClient.get<book[]>('http://localhost:3000/books?_page=2&_limit=2', {
//     params: {
//       addedToChart: 'true'
//     }
//   })

// }
}

