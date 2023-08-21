
import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../core/service/user-info.service';
import { Observable, Subscription, first } from 'rxjs';
import { BookService } from '../../core/service/book.service';
import { book } from '../../core/data/book.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{





  bookChartSub!:Subscription;
  CountBookCart!:number;
  bookList!: book[];

  private isUserLogedInSubscription!: Subscription
  private isMyHeroesComponentOpenSubscriotion!: Subscription

  private isUserAdminSubscription!: Subscription;
  public isUserAdmin!: boolean;

  constructor(private userInfoService: UserInfoService, private bookService:BookService) {}
  public isUserLogedIn!: boolean
  public  isMyHeroesComponentOpen!: boolean

  onLogOut(){
    this.userInfoService.updateIsUserAdmin(false);
    this.userInfoService.updateIsUserLogedIn(false);//
    this.isUserLogedIn=false;
  }

  // public  isUserLogedIn$!: Observable <boolean> // for async pipe

  ngOnInit(): void {
    // this.isUserLogedIn$ = this.userInfoService.isUserLogedIn$ //
    this.isUserLogedInSubscription = this.userInfoService.isUserLogedIn$.subscribe (isUserLogedIn =>{
      this.isUserLogedIn = isUserLogedIn;
      this.userInfoService.getIsUserLogedIn();
    })

    this.isMyHeroesComponentOpenSubscriotion = this.userInfoService.isMyHeroesComponentOpen$.subscribe(isMyHeroesComponentOpen =>{
      this.isMyHeroesComponentOpen = isMyHeroesComponentOpen;
      this.userInfoService.getIsMyHeroesComponentOpen()
    })


     this.bookChartSub = this.bookService.chartBook.subscribe((val)=>{
      // this.bookService.getChartBook()
      console.log(val);

      this.CountBookCart = val.length
    })

    this.isUserAdminSubscription = this.userInfoService.isUserAdmin$.subscribe (isUserAdmin=>{
      this.isUserAdmin =isUserAdmin;
    })





    // this.isUserLogedInSubscription.add (this.isMyHeroesComponentOpenSubscriotion) // you can add all of the subsription into one giant subsription an unsubscribe it in ngOnDstroy
  }

  ngOnDestroy(): void {
    this.isUserLogedInSubscription.unsubscribe();
    this.isMyHeroesComponentOpenSubscriotion.unsubscribe();
    this.bookChartSub.unsubscribe();
    this.isUserAdminSubscription.unsubscribe();

  }

}


