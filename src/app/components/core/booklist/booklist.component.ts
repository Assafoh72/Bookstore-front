import { Component, OnInit } from '@angular/core';
import { first, take } from 'rxjs';
import { book } from 'src/app/components/core/data/book.interfaces';
import { BookService } from 'src/app/components/core/service/book.service';
import { UserInfoService } from 'src/app/components/core/service/user-info.service';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit{
  constructor(
    private bookService: BookService,
    private userInfoService: UserInfoService,
  ){}


  ngOnInit(): void {
    // this.books = this.bookService.getHeroesList();
    // this.saveToLocalStorage();
    // this.updatePage()

    this.bookService.getBooksList().pipe(first()).subscribe((books) => {
      this.bookList = books;
      this.updatePage()
    })

  }

   newPriceInput = ""



  displayedBooks: book[] = [];

  //  books: book[]=[];
   isDisplayNone: boolean = true
   userName = this.userInfoService.getUserInfo()?.name;

  // saveToLocalStorage(): void {
  //   const heroesJson: string = JSON.stringify(this.books);
  //   localStorage.setItem('heroes', heroesJson);
  // }

  // geLocalStorage(): void {
  //   localStorage.getItem
  // }

  onAddToChart(book: book, index: number): void {
    this.bookList[index].addedToChart = true
    this.bookService.updateAddedToChart(index, true);
    // this.bookService.addHeroToMyHeroes(hero);
    // this.modalService.updateIsModalDisplayed(true, 'Hero was added')
    // this.saveToLocalStorage()
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

 isUserAdmin: boolean = this.userInfoService.getIsUserAdmin()


 onDeleteBook(id: number){
  this.bookService.onDeleteBook(id)

 }

 onUpdatePrice(id: number,newPrice: number){
  
  this.bookService.onUpdatePrice(id, newPrice)
 }
}
