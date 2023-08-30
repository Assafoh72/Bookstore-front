import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { book } from '../data/book.interfaces';
import { BookService } from '../service/book.service';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-cart-user',
  templateUrl: './cart-user.component.html',
  styleUrls: ['./cart-user.component.scss']
})
export class CartUserComponent implements OnInit {
  constructor(private bookService: BookService,
    private userInfoService: UserInfoService)
    {}
    ngOnInit(): void {

      this.bookService.getCartBookUser();
      this.bookChartSub = this.bookService.cartBookUser.subscribe((val)=>{
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

    countBookCart = this.bookChart.length


    totalPrice: number =0;
    priceAfterDiscount: number = 0;
    discount: number = 0;

 // pegination
  itemsPerPage: number = 6
  currentPage: number = 1
  totalPages: number = Math.max((Math.ceil(this.bookChart.length/6)),1);

  onRemovefromChart(index: number){
    this.bookService.updateAddedToCartUser(index,false)

    const bookWithSpecificId = this.bookChart.find(book => book.id === String(index));
    if (bookWithSpecificId) {
      bookWithSpecificId.addedToUserCart = false;
    }
  this.bookService.updateBookCartUser(this.bookChart);
  this.bookService.getCartBookUser()
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

  onDeleteAllCartBock(){
    for(let book of this.bookChart){
      if (book.addedToUserCart){
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
