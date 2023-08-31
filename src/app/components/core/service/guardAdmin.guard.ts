import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoService } from './user-info.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardAdmin implements CanActivate {
  constructor (private userInfoService: UserInfoService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.userInfoService.getIsUserAdmin());
      if(this.userInfoService.getIsUserAdmin()){
        return true
      }

      return this.router.createUrlTree(['/log-in']);

  }

}
