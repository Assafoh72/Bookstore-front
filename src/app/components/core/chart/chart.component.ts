import { Component, OnInit } from '@angular/core';
import { Subscription, first, take } from 'rxjs';
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

      this.bookService.getChartBook();
      this.bookChartSub = this.bookService.chartBook.subscribe((val)=>{
        this.bookChart = val;
        this.updatePage()
        console.log('bookChart: ' ,this.bookChart);

      })

    }
    // private ChartBoSubscription!: Subscription;

    bookChart: book[] = [];
    bookChartSub!:Subscription
    displayedBooks: book[] = [];

 // pegination
  itemsPerPage: number = 6
  currentPage: number = 1
  totalPages: number = Math.max((Math.ceil(this.bookChart.length/6)),1);

  onRemovefromChart(index: number, indexInBookChart: number){
    this.bookService.updateAddedToChart(index,false)

    const bookWithSpecificId = this.bookChart.find(book => book.id === String(index));
    if (bookWithSpecificId) {
      bookWithSpecificId.addedToChart = false;
    }
  this.bookService.updateBookChart(this.bookChart);
  this.bookService.getChartBook()
  this.updatePage()
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
