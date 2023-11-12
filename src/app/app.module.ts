import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddressService } from './services/address/address.service';
import { TicketService } from './services/ticket/ticket.service';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AddressService,TicketService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
