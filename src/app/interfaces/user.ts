import { Address } from "./address";

export interface User {
    userId:string;
    password:string;
    fullName?:string;
    email?:string;
    loginStatus:boolean;
    address?:Address;
    phoneNumber?:string;
    userType:string;
}
