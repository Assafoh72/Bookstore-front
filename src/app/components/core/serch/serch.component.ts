import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { UserInfoService } from '../service/user-info.service';
import { Subscription, first } from 'rxjs';
import { book } from '../data/book.interfaces';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.scss']
})
export class SerchComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private userInfoService: UserInfoService,
  ){}


  public isUserAdmin!: boolean;
  keyword!: string

  ngOnInit(): void {
    this.bookService.getBooksList().pipe(first()).subscribe((books) => {
      this.bookList = books;
      this.keyword = this.bookService.getKeyword()
      this.filterBooksByTitleKeyword(this.keyword)
      this.updatePage()
    })

    this.isUserLogedInSubscription = this.userInfoService.isUserLogedIn$.subscribe( isUserlogedIn =>{
      this.isUserLogedIn = isUserlogedIn;
    })





  }

  displayedBooks: book[] = [];

  public isUserLogedIn!: boolean;
  private isUserLogedInSubscription!: Subscription;




  discount: number = 0;

   isDisplayNone: boolean = true
   userName = this.userInfoService.getUserInfo()?.name;


  // onAddToChart(book: book, index: number): void {
  //   this.bookList[index].addedToChart = true
  //   this.bookService.updateAddedToChart(index, true);
  //   this.bookService.getChartBook() //////   הוספתי כשי שכשאני מוסיף ספר זה יעדכן את המספר ספרים שמוצד בהאדר בעגלה

  // }

  onAddToChart(indexInArry: number, index: number): void {
    console.log("index: " ,index);
    // this.bookList[indexInArry].addedToChart = true
    for(let book of this.bookList){
      if(+book.id === index ){
        book.addedToChart = true;
        break;
      }
    }
    this.bookService.updateAddedToChart(index, true);
    this.bookService.getChartBook() //////   הוספתי כשי שכשאני מוסיף ספר זה יעדכן את המספר ספרים שמוצד בהאדר בעגלה
  }

  onAddToUserChart(index: number): void {
    console.log("index: " ,index);
    // this.bookList[indexInArry].addedToChart = true
    for(let book of this.bookList){
      if(+book.id === index ){
        book.addedToUserCart = true;
        break;
      }
    }
    this.bookService.updateAddedToCartUser(index, true);
    this.bookService.getCartBookUser() //////   הוספתי כשי שכשאני מוסיף ספר זה יעדכן את המספר ספרים שמוצד בהאדר בעגלה
  }


  private bookList: book[] =[];

 // pegination
  itemsPerPage: number = 6
  currentPage: number = 1
  totalPages: number =  Math.max((this.bookList.length/6),1);

  updatePage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;



    this.displayedBooks = this.bookList.slice(startIndex, endIndex);
    this.totalPages =  Math.max((Math.ceil(this.bookList.length/6)),1);

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

//  isUserAdmin: boolean = this.userInfoService.getIsUserAdmin()


 onDeleteBook(id: number){
  this.bookService.onDeleteBook(id)
  this.bookList.splice(id,1);


//
this.bookService.getBooksList().pipe(first()).subscribe((books) => {
  this.bookList = books;
  this.updatePage()
})
//


 }

 onUpdatePrice(id: number,newPrice: number){
  this.bookService.onUpdatePrice(id, newPrice)
  this.bookList[id].price = newPrice;
//
  this.bookService.getBooksList().pipe(first()).subscribe((books) => {
    this.bookList = books;
    this.updatePage()
  })
//
 }

 onUpdateTitle(id: number,newTitle: string){
  this.bookService.onUpdateTitle(id, newTitle)
  this.bookList[id].Title = newTitle;
//
  this.bookService.getBooksList().pipe(first()).subscribe((books) => {
    this.bookList = books;
    this.updatePage()
  })
//
 }

 setDiscount(discount: number){
  this.bookService.setDiscountPercentage(discount)
  this.discount = discount
 }

filterBooksByTitleKeyword(keyword: string){
  const filteredBooks: book[] = [];

  for (const book of this.bookList) {
    if (book.Title.includes(keyword)) {
      filteredBooks.push(book);
    }
  }
  this.bookList = filteredBooks;
}

ngOnDestroy(){
  this.isUserLogedInSubscription.unsubscribe();
}


}
