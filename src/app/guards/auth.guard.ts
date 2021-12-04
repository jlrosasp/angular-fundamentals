import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  
  constructor(private router: Router, private auth: AngularFireAuth) {}
  
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return new Promise((resolve: any, reject: any) => { 
        this.auth.onAuthStateChanged((user: any)=> {
          if (user) {
            resolve(true);
          } else {
            console.log('Auth Guard: canActivate: user is not logged in');
            this.router.navigate(['/login']);
            resolve(false);
          }
        })
      });
  }
  
}
