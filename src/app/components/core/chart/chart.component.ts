import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, first, take } from 'rxjs';
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
        this.totalPrice = 0;
        this.priceAfterDiscount=0;
        this.calculateTotalPrice()
        this.calculateTotalPriceAfterDiscount()
        this.countBookCart = val.length

      })




      this.isUserLogedInSubscription = this.userInfoService.isUserLogedIn$.subscribe (isUserLogedIn =>{
        this.isUserLogedIn = isUserLogedIn;
        this.userInfoService.getIsUserLogedIn();
      })

      // this.calculateTotalPrice()
      // this.calculateTotalPriceAfterDiscount()


      this.isModalCartDisplaySubscription = this.bookService.isModalOnDisplay$.subscribe(isDisplay =>{
        this.isModalCartDisplay = isDisplay
      })



    }
    // private ChartBoSubscription!: Subscription;

    public isModalCartDisplay!: boolean;
    private isModalCartDisplaySubscription!: Subscription;

    private isUserLogedInSubscription!: Subscription;
    public isUserLogedIn!: boolean;


    bookChart: book[] = [];
    bookChartSub!:Subscription
    displayedBooks: book[] = [];

    // private isModalOnDisplay: boolean = false;
    // private isModalOnDisplaySubject = new BehaviorSubject<boolean>(false)
    // isModalOnDisplay$: Observable<boolean> = this.isModalOnDisplaySubject.asObservable();

    // getIsModalOnDisplay(){
    //   return this.isModalOnDisplay;
    // }
    // updateIsModalOnDisplay(isDisplay: boolean){
    //   this.isModalOnDisplaySubject.next(isDisplay)
    // }



    countBookCart = this.bookChart.length


    totalPrice: number =0;
    priceAfterDiscount: number = 0;
    discount: number = 0;

 // pegination
  itemsPerPage: number = 6
  currentPage: number = 1
  totalPages: number = Math.max((Math.ceil(this.bookChart.length/6)),1);

  // onRemovefromChart(index: number, indexInBookChart: number){
  //   this.bookService.updateAddedToChart(index,false)

  //   const bookWithSpecificId = this.bookChart.find(book => book.id === String(index));
  //   if (bookWithSpecificId) {
  //     bookWithSpecificId.addedToChart = false;
  //   }
  // this.bookService.updateBookChart(this.bookChart);
  // this.bookService.getChartBook()
  // this.updatePage()
  // }

  onRemovefromChart(index: number){
    console.log("in onRemovefromChart()");

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

  onDeleteAllCartBock(){
    for(let book of this.bookChart){
      if (book.addedToChart){
        console.log(book);
        this.onRemovefromChart(+book.id)
      }
    }
    this.bookService.updateIsModalOnDisplay(false);
  }

  calculateTotalPrice(){
    for(let book of this.bookChart){
      this.totalPrice += +book.price
    }
  }

  calculateTotalPriceAfterDiscount(){

    this.priceAfterDiscount = +(1-this.bookService.getDiscountPercentage())*(this.totalPrice);
    this.discount = +(this.totalPrice - this.priceAfterDiscount);
    if(!this.isUserLogedIn){
      console.log('is User loged in '+ this.isUserLogedIn);

      this.priceAfterDiscount = this.totalPrice;
      this.discount = 0;
    }
   }





  ngOnDestroy(){
    this.isUserLogedInSubscription.unsubscribe();
    this.isModalCartDisplaySubscription.unsubscribe();

  }
}


