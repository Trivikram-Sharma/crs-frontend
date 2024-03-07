import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { AddressService } from 'src/app/services/address/address.service';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminhomepageGuard implements Resolve<any> {

  constructor(
    private addressService: AddressService,
    private ticketService: TicketService,
    private userService: UserService
  ){}




  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    return forkJoin(
      this.addressService.getAllAddresses(),
      this.ticketService.getAllTickets(userId:String)
    );
  }
  
}
