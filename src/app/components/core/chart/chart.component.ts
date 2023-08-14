import { Component, OnInit } from '@angular/core';
import { first, take } from 'rxjs';
import { book } from 'src/app/components/core/data/book.interfaces';
import { BookService } from 'src/app/components/core/service/book.service';
import { UserInfoService } from 'src/app/components/core/service/user-info.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit{
  constructor(private bookService: BookService,
    private userInfoService: UserInfoService)
    {}
    ngOnInit(): void {
      this.bookService.getChartBook().pipe(first()).subscribe((books) => {
        this.bookChart = books;
        // this.totalPages =  Math.max((Math.ceil(this.bookChart.length/6)),1);
        this.updatePage()

        // this.displayedBooks = this.bookChart.slice(this.startIndex, this.endIndex);

        // this.updatePage()

      })


    }

    bookChart: book[] = [];
    displayedBooks: book[] = [];

 // pegination
  itemsPerPage: number = 6
  currentPage: number = 1
  totalPages: number = 1

  onRemovefromChart(index: number, indexInBookChart: number){
    this.bookService.updateAddedToChart(index,false)
    this.bookChart[indexInBookChart].addedToChart = false
    // this.updatePage() // אחרי שאני מסיר ספר אז הוא עדיין נמצא בגלל שהמערך החלקי שמוצג לא מתעדכן
  }

  updatePage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedBooks = this.bookChart.slice(startIndex, endIndex);
    this.totalPages =  Math.max((Math.ceil(this.bookChart.length/6)),1);
  }

  nextPage() {
    this.currentPage++;
    this.updatePage();
  }

  prevPage() {
    this.currentPage--;
    this.updatePage();
  }
  //pegination



}
