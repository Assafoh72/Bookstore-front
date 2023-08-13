import { Component, OnInit } from '@angular/core';
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


  }


  displayedBooks: book[] = [];

  //  books: book[]=[];
   isDisplayNone: boolean = true
   userName = this.userInfoService.getUserInfo()?.name;

  // saveToLocalStorage(): void {
  //   const heroesJson: string = JSON.stringify(this.books);
  //   localStorage.setItem('heroes', heroesJson);
  // }

  geLocalStorage(): void {
    localStorage.getItem
  }

  // onAddToMyheroes(hero: Hero, index: number): void {
  //   this.heroes[index].addedToMyHeroes = true
  //   this.heroService.addHeroToMyHeroes(hero);
  //   this.modalService.updateIsModalDisplayed(true, 'Hero was added')
  //   this.saveToLocalStorage()
  // }

 // pegination
  itemsPerPage: number = 6
  currentPage: number = 1
  totalPages: number = 5;

  updatePage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedBooks = this.booksList.slice(startIndex, endIndex);
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

  booksList: book[] = [{
    Title: 'To Kill a Mockingbird',
    id: '1',
    category: 'Fiction',
    publisher: 'HarperCollins',
    datePublished: new Date('1960-07-11'),
    language: 'English',
    bestsellerRating: 4.5,
    CustomerRating: 4.8,
    numberOfPages: 336,
    weight: 0.6
  },
  {
    Title: '1984',
    id: '2',
    category: 'Fiction',
    publisher: 'Secker & Warburg',
    datePublished: new Date('1949-06-08'),
    language: 'English',
    bestsellerRating: 4.4,
    CustomerRating: 4.7,
    numberOfPages: 328,
    weight: 0.55
  },
  {
    Title: 'The Great Gatsby',
    id: '3',
    category: 'Fiction',
    publisher: 'Charles Scribner\'s Sons',
    datePublished: new Date('1925-04-10'),
    language: 'English',
    bestsellerRating: 4.3,
    CustomerRating: 4.6,
    numberOfPages: 180,
    weight: 0.4
  },
  {
    Title: 'Pride and Prejudice',
    id: '4',
    category: 'Fiction',
    publisher: 'T. Egerton, Whitehall',
    datePublished: new Date('1813-01-28'),
    language: 'English',
    bestsellerRating: 4.2,
    CustomerRating: 4.5,
    numberOfPages: 432,
    weight: 0.65
  },
  {
    Title: 'Harry Potter and the Sorcerer\'s Stone',
    id: '5',
    category: 'Fantasy',
    publisher: 'Scholastic',
    datePublished: new Date('1997-06-26'),
    language: 'English',
    bestsellerRating: 4.7,
    CustomerRating: 4.9,
    numberOfPages: 320,
    weight: 0.7
  },
  {
    Title: 'To Kill a Mockingbird',
    id: '1',
    category: 'Fiction',
    publisher: 'HarperCollins',
    datePublished: new Date('1960-07-11'),
    language: 'English',
    bestsellerRating: 4.5,
    CustomerRating: 4.8,
    numberOfPages: 336,
    weight: 0.6
  },
  {
    Title: '1984',
    id: '2',
    category: 'Fiction',
    publisher: 'Secker & Warburg',
    datePublished: new Date('1949-06-08'),
    language: 'English',
    bestsellerRating: 4.4,
    CustomerRating: 4.7,
    numberOfPages: 328,
    weight: 0.55
  },
  {
    Title: 'The Great Gatsby',
    id: '3',
    category: 'Fiction',
    publisher: 'Charles Scribner\'s Sons',
    datePublished: new Date('1925-04-10'),
    language: 'English',
    bestsellerRating: 4.3,
    CustomerRating: 4.6,
    numberOfPages: 180,
    weight: 0.4
  },
  {
    Title: 'Pride and Prejudice',
    id: '4',
    category: 'Fiction',
    publisher: 'T. Egerton, Whitehall',
    datePublished: new Date('1813-01-28'),
    language: 'English',
    bestsellerRating: 4.2,
    CustomerRating: 4.5,
    numberOfPages: 432,
    weight: 0.65
  },
  {
    Title: 'Harry Potter and the Sorcerer\'s Stone',
    id: '5',
    category: 'Fantasy',
    publisher: 'Scholastic',
    datePublished: new Date('1997-06-26'),
    language: 'English',
    bestsellerRating: 4.7,
    CustomerRating: 4.9,
    numberOfPages: 320,
    weight: 0.7
  },
  {
    Title: 'To Kill a Mockingbird',
    id: '1',
    category: 'Fiction',
    publisher: 'HarperCollins',
    datePublished: new Date('1960-07-11'),
    language: 'English',
    bestsellerRating: 4.5,
    CustomerRating: 4.8,
    numberOfPages: 336,
    weight: 0.6
  },
  {
    Title: '1984',
    id: '2',
    category: 'Fiction',
    publisher: 'Secker & Warburg',
    datePublished: new Date('1949-06-08'),
    language: 'English',
    bestsellerRating: 4.4,
    CustomerRating: 4.7,
    numberOfPages: 328,
    weight: 0.55
  },
  {
    Title: 'The Great Gatsby',
    id: '3',
    category: 'Fiction',
    publisher: 'Charles Scribner\'s Sons',
    datePublished: new Date('1925-04-10'),
    language: 'English',
    bestsellerRating: 4.3,
    CustomerRating: 4.6,
    numberOfPages: 180,
    weight: 0.4
  },
  {
    Title: 'Pride and Prejudice',
    id: '4',
    category: 'Fiction',
    publisher: 'T. Egerton, Whitehall',
    datePublished: new Date('1813-01-28'),
    language: 'English',
    bestsellerRating: 4.2,
    CustomerRating: 4.5,
    numberOfPages: 432,
    weight: 0.65
  },
  {
    Title: 'Harry Potter and the Sorcerer\'s Stone',
    id: '5',
    category: 'Fantasy',
    publisher: 'Scholastic',
    datePublished: new Date('1997-06-26'),
    language: 'English',
    bestsellerRating: 4.7,
    CustomerRating: 4.9,
    numberOfPages: 320,
    weight: 0.7
  },
  {
    Title: 'To Kill a Mockingbird',
    id: '1',
    category: 'Fiction',
    publisher: 'HarperCollins',
    datePublished: new Date('1960-07-11'),
    language: 'English',
    bestsellerRating: 4.5,
    CustomerRating: 4.8,
    numberOfPages: 336,
    weight: 0.6
  },
  {
    Title: '1984',
    id: '2',
    category: 'Fiction',
    publisher: 'Secker & Warburg',
    datePublished: new Date('1949-06-08'),
    language: 'English',
    bestsellerRating: 4.4,
    CustomerRating: 4.7,
    numberOfPages: 328,
    weight: 0.55
  },
  {
    Title: 'The Great Gatsby',
    id: '3',
    category: 'Fiction',
    publisher: 'Charles Scribner\'s Sons',
    datePublished: new Date('1925-04-10'),
    language: 'English',
    bestsellerRating: 4.3,
    CustomerRating: 4.6,
    numberOfPages: 180,
    weight: 0.4
  },
  {
    Title: 'Pride and Prejudice',
    id: '4',
    category: 'Fiction',
    publisher: 'T. Egerton, Whitehall',
    datePublished: new Date('1813-01-28'),
    language: 'English',
    bestsellerRating: 4.2,
    CustomerRating: 4.5,
    numberOfPages: 432,
    weight: 0.65
  },
  {
    Title: 'Harry Potter and the Sorcerer\'s Stone',
    id: '5',
    category: 'Fantasy',
    publisher: 'Scholastic',
    datePublished: new Date('1997-06-26'),
    language: 'English',
    bestsellerRating: 4.7,
    CustomerRating: 4.9,
    numberOfPages: 320,
    weight: 0.7
  },
  {
    Title: 'To Kill a Mockingbird',
    id: '1',
    category: 'Fiction',
    publisher: 'HarperCollins',
    datePublished: new Date('1960-07-11'),
    language: 'English',
    bestsellerRating: 4.5,
    CustomerRating: 4.8,
    numberOfPages: 336,
    weight: 0.6
  },
  {
    Title: '1984',
    id: '2',
    category: 'Fiction',
    publisher: 'Secker & Warburg',
    datePublished: new Date('1949-06-08'),
    language: 'English',
    bestsellerRating: 4.4,
    CustomerRating: 4.7,
    numberOfPages: 328,
    weight: 0.55
  },
  {
    Title: 'The Great Gatsby',
    id: '3',
    category: 'Fiction',
    publisher: 'Charles Scribner\'s Sons',
    datePublished: new Date('1925-04-10'),
    language: 'English',
    bestsellerRating: 4.3,
    CustomerRating: 4.6,
    numberOfPages: 180,
    weight: 0.4
  },
  {
    Title: 'Pride and Prejudice',
    id: '4',
    category: 'Fiction',
    publisher: 'T. Egerton, Whitehall',
    datePublished: new Date('1813-01-28'),
    language: 'English',
    bestsellerRating: 4.2,
    CustomerRating: 4.5,
    numberOfPages: 432,
    weight: 0.65
  },
  {
    Title: 'Harry Potter and the Sorcerer\'s Stone',
    id: '5',
    category: 'Fantasy',
    publisher: 'Scholastic',
    datePublished: new Date('1997-06-26'),
    language: 'English',
    bestsellerRating: 4.7,
    CustomerRating: 4.9,
    numberOfPages: 320,
    weight: 0.7
  },
  {
    Title: 'To Kill a Mockingbird',
    id: '1',
    category: 'Fiction',
    publisher: 'HarperCollins',
    datePublished: new Date('1960-07-11'),
    language: 'English',
    bestsellerRating: 4.5,
    CustomerRating: 4.8,
    numberOfPages: 336,
    weight: 0.6
  },
  {
    Title: '1984',
    id: '2',
    category: 'Fiction',
    publisher: 'Secker & Warburg',
    datePublished: new Date('1949-06-08'),
    language: 'English',
    bestsellerRating: 4.4,
    CustomerRating: 4.7,
    numberOfPages: 328,
    weight: 0.55
  },
  {
    Title: 'The Great Gatsby',
    id: '3',
    category: 'Fiction',
    publisher: 'Charles Scribner\'s Sons',
    datePublished: new Date('1925-04-10'),
    language: 'English',
    bestsellerRating: 4.3,
    CustomerRating: 4.6,
    numberOfPages: 180,
    weight: 0.4
  },
  {
    Title: 'Pride and Prejudice',
    id: '4',
    category: 'Fiction',
    publisher: 'T. Egerton, Whitehall',
    datePublished: new Date('1813-01-28'),
    language: 'English',
    bestsellerRating: 4.2,
    CustomerRating: 4.5,
    numberOfPages: 432,
    weight: 0.65
  },
  {
    Title: 'Harry Potter and the Sorcerer\'s Stone',
    id: '5',
    category: 'Fantasy',
    publisher: 'Scholastic',
    datePublished: new Date('1997-06-26'),
    language: 'English',
    bestsellerRating: 4.7,
    CustomerRating: 4.9,
    numberOfPages: 320,
    weight: 0.7
  }
];

}
