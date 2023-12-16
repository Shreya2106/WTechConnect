import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class userGuard implements CanActivate{

  constructor(private login:LoginService, private router:Router){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.login.isLoggedIn() && this.login.getUserRole()=='ROLE_USER')
      return true;
    this.router.navigate(['login']);
    return false;
  }
};
