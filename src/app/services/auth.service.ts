import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(username :string,password:string){
    if (username==='mehdi' && password==='mehdi'){
      return 200;
    }
    else {
      return 403;
    }
  }
}
