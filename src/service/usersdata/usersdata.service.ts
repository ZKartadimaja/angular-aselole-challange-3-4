import { Injectable } from '@angular/core';
import { userDataPublic } from '../../app/users.data';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
  

  userData = userDataPublic;

  constructor() { }

  // getUsers(){
  //   return this.userData
  // }

  // addUsers(event: any){
  //   this.userData.push(event)
  // }

  deleteUsers(event: any){
    this.userData.splice(event,1)
  }

  onChecked(index:number, isChecked: boolean){
    let selected = this.userData[index];
    selected.isChecked = isChecked;
    this.userData[index] = selected;
  }
}
