import { Timestamp, TimestampProvider } from "rxjs";

export interface Ticket {
    ticketId:string;
    customer:string;
    manager?:string;
    engineer?:string;
    description:string;
    status:string;
    createdOn?:Date;
}
