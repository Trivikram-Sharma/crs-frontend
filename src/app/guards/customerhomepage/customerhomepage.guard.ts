import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerhomepageGuard implements Resolve<any> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    return true;
  }
  
}
