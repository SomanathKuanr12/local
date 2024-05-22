import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  readItem(key:string)
  {
    const data=sessionStorage.getItem(key);
    return data?JSON.parse(data):null
  }
  setItem(key:string,value:any){
    return sessionStorage.setItem(key,JSON.stringify(value))
  }
  UpdateItem(key:string,value:any)
  {
    if(sessionStorage.getItem(key))
    {
      sessionStorage.setItem(key,JSON.stringify(value))
      return true;
    }
    return false
  }
  DeleteItem(key:string){
    if(sessionStorage.getItem(key)){
      sessionStorage.removeItem(key)
      return true;
    }
    return false
  }
}
