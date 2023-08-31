import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoService } from './user-info.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  constructor (private userInfoService: UserInfoService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.userInfoService.getIsUserLogedIn());
      if(this.userInfoService.getIsUserLogedIn()){
        return true
      }

      return this.router.createUrlTree(['/log-in']);

  }

}
