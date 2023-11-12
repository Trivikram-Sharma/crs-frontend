import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ticketapi from 'src/app/api-constants/ticketapi';
import { Ticket } from 'src/app/interfaces/ticket';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient) { }


  addTicket(ticket:Ticket){
    return this.httpClient.post<Ticket>(ticketapi.addTicket,ticket);
  }

  assignTicketToEngineer(ticketId:string,engineer:User){
    return this.httpClient.put<Ticket>(ticketapi.assignTicketToEngineer+`?ticketId=${ticketId}`,engineer);
  }

}
