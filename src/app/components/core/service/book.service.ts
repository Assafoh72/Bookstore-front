import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from '../data/book.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

    getBooksList() {
      return this.httpClient.get<book[]>('http://localhost:3000/books')
    }
    updateAddedToChart(id: number, status: boolean) {
      const addres:string = 'http://localhost:3000/books/' + id;
      console.log(addres);

      fetch(addres, {
       method: 'PATCH',
       headers: {
    'Content-Type': 'application/json'
      },
      body: JSON.stringify({ addedToChart: status })
      });
    }

getChartBook() {
  return this.httpClient.get<book[]>('http://localhost:3000/books', {
    params: {
      addedToChart: 'true'
    }
  });
}
}

