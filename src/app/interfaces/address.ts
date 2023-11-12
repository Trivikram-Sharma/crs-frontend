import { User } from "./user";

export interface Address {
    building:string;
    street:string;
    area:string;
    city:string;
    state:string;
    country:string;
    pincode:string;
    users?:User[];
}
