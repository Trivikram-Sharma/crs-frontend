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

  getAllTickets(userId:string){
    return this.httpClient.get<Ticket[]>(ticketapi.getAllTickets+`?userId=${userId}`);
  }

  getTicketWithId(id:string){
    return this.httpClient.get<Ticket>(ticketapi.getTicketWithId+`?ticketId=${id}`);
  }

  getAllTicketsOfCustomer(customerId:string){
    return this.httpClient.get<Ticket[]>(ticketapi.getAllTicketsOfCustomer+`?userId=${customerId}`);
  }

  getAllTicketsOfManager(managerId:string){
    return this.httpClient.get<Ticket[]>(ticketapi.getAllTicketsOfManager+`?userId=${managerId}`);
  }

  getAllTicketsOfEngineer(engineerId:string){
    return this.httpClient.get<Ticket[]>(ticketapi.getAllTicketsOfEngineer+`?userId=${engineerId}`);
  }

  getAllTicketsWithStatus(status:string){
    return this.httpClient.get<Ticket[]>(ticketapi.getAllTicketsWithStatus+`?status=${status}`);
  }

  updateTicketManager(managerId:string,ticket:Ticket){
    return this.httpClient.patch<Ticket>(ticketapi.updateTicketManager+`?userId=${managerId}`,ticket);
  }
  


}
