import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class UserInfoService {
  private userInfo: { email: string; password: string; name: string } | null = null;

  private userAdmin: {email: string; password: string;} = {email: "assafoh72@gmail.com", password: "Aa!1123456"};

  getUserAdminInfo(): {email: string, password: string} | null {
    return this.userAdmin
  }

  storeUserInfo(email: string, password: string, name: string): void {
    this.userInfo = { email, password, name };
  }

  getUserInfo(): { email: string; password: string; name: string } | null {
    return this.userInfo;
  }






  private isUserLogedIn: boolean = false;

  // private isUserLogedInSubject = new BehaviorSubject<boolean>(false)
  // isUserLogedIn$: Observable<boolean> = this.isUserLogedInSubject.asObservable();












  private isUserLogedInForGuard: boolean = false;
  private isUserAdmin: boolean = false;

  getIsUserAdmin() {
    return this.isUserAdmin;
  }
  updateIsUserAdmin(isAdmin: boolean) {
    this.isUserAdmin = isAdmin;
  }


  private isUserLogedInSubject = new BehaviorSubject<boolean>(false)
  isUserLogedIn$: Observable<boolean> = this.isUserLogedInSubject.asObservable();

  updateIsUserLogedIn(isUserLogedIn:boolean){
    this.isUserLogedInSubject.next(isUserLogedIn);
  }

  getIsUserLogedIn() {
    return this.isUserLogedIn
  }

  updateIsUserLogedInGuard(isUserLogedIn:boolean){
    this.isUserLogedInForGuard=isUserLogedIn;
  }

  getIsUserLogedInGuard() {
    return this.isUserLogedInForGuard
  }

  private isMyHeroesComponentOpen: boolean = false
  private isMyHeroesComponentOpenSubject = new BehaviorSubject<boolean>(false)
  isMyHeroesComponentOpen$: Observable<boolean> = this.isMyHeroesComponentOpenSubject.asObservable()

  updateIsMyHeroesComponentOpen(isMyHeroesComponentOpen:boolean){
    this.isMyHeroesComponentOpenSubject.next(isMyHeroesComponentOpen)
  }

  getIsMyHeroesComponentOpen() {
    return this.isMyHeroesComponentOpen
  }

}
