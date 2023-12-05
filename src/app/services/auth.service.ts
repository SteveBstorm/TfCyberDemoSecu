import { ConnectedUser } from './../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environment';

import * as jwt_decode from 'jwt-decode';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url : string = environment.apiurl

  // get isConnected() : boolean {
  //   return localStorage.getItem("token") != undefined
  // }

  get connectedUser() : ConnectedUser | undefined {
    let user = localStorage.getItem("userInfo")
    if(user != undefined)
      return JSON.parse(user)
    return undefined
  }

  connectedUserSubject : Subject<ConnectedUser | undefined> = new Subject<ConnectedUser | undefined>()

  //isConnectedSubject : Subject<boolean> = new Subject<boolean>()

  constructor(
    private _client : HttpClient,
    private _router : Router
    ) { }

    /*
      pour decoder le token => npm i jwt-decode
    */

    login(email : string, password : string){
      // dans le cas de la récupération de token : préciser {responseType:'text'}
      this._client.post(this.url + "auth/login", {email, password}, {responseType : 'text'})
        .subscribe({
          next : (token : string) => {
            localStorage.setItem("token", token)
            let decodedToken : any = jwt_decode.jwtDecode(token)
            console.log(decodedToken);
            let cn : ConnectedUser = {
              id : decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"],
              role : decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
              nickname : decodedToken["Nickname"]
            }

            localStorage.setItem("userInfo", JSON.stringify(cn))
            //this.isConnectedSubject.next(this.isConnected)
            this.connectedUserSubject.next(this.connectedUser)
            this._router.navigate(["article/list"])
          }
        })
    }

    logout(){
      localStorage.clear()
      //this.isConnectedSubject.next(this.isConnected)
      this.connectedUserSubject.next(this.connectedUser)
      this._router.navigate(["home"])
    }


}
