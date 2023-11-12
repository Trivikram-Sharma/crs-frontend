import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import userapi from 'src/app/api-constants/userapi';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  login(user:User) {
    return this.httpClient.put<User>(userapi.login,user);
  }

  logout(user:User){
    return this.httpClient.put<boolean>(userapi.logout,user);
  }

  register(user:User){
    return this.httpClient.post<boolean>(userapi.register,user);
  }
}
