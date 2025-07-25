import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mockUsers:user[] = [
    {username:'admin', password:'admin', fulname:'آرش نیک زاد', enablad:true},
    {username:'guest', password:'guest', fulname:'سارا رضوی', enablad:true},
    {username:'user1', password:'user1', fulname:'امیر کاظمی', enablad:true},
    {username:'user2', password:'user2', fulname:'نازنین تهرانی', enablad:true},
  ];
  check(username:string ,password:string){
    let result = this.mockUsers.filter(u=>u.username==username && u.password==password && u.enablad==true );
    if (result.length==0) {
      //یعنی اگر خالی بود .length==0
      return false
    }
    return true
  }

}
interface user {
  username:string;
  password:string;
  fulname:string;
  enablad:boolean;
}
