import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Address } from 'src/app/interfaces/address';
import { Observable } from 'rxjs';
import addressapi from 'src/app/api-constants/addressapi';
@Injectable({
  providedIn: 'root'
})
export class AddressService {


  constructor(private httpClient:HttpClient) { }
  public allAddresses:Address[] = [];

  addAddress(address:Address){
    return this.httpClient.post<boolean>(addressapi.addaddress,address);
  }

  getAddress(building:string){
    return this.httpClient.get<Address>(addressapi.getAddressWithBuilding+`?id=${building}`);
  }
  getAllAddresses(){
    return this.httpClient.get<Address[]>(addressapi.getAllAddresses);
  }
  getAllAddressesWithPinCode(pincode:string) {
    return this.httpClient.get<Address[]>(addressapi.getAddressesWithPincode+`?pincode=${pincode}`);
  }

  updateAddress(address:Address){
    return this.httpClient.put<Address>(addressapi.updateAddress,address);
  }
  deleteAddress(address:Address){
    return this.httpClient.delete<boolean>(addressapi.deleteAddress+`?building=${address.pincode}`);
  }
}
