
import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../core/service/user-info.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  private isUserLogedInSubscription!: Subscription
  private isMyHeroesComponentOpenSubscriotion!: Subscription

  constructor(private userInfoService: UserInfoService) {}
  public isUserLogedIn!: boolean
  public  isMyHeroesComponentOpen!: boolean

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

    // this.isUserLogedInSubscription.add (this.isMyHeroesComponentOpenSubscriotion) // you can add all of the subsription into one giant subsription an unsubscribe it in ngOnDstroy
  }

  ngOnDestroy(): void {
    this.isUserLogedInSubscription.unsubscribe();
    this.isMyHeroesComponentOpenSubscriotion.unsubscribe();
  }

}
