import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string = environment.apiurl
  constructor(
    private _client : HttpClient,
    private _router : Router
    ) { }

  register(user : User) {
    console.log(user)
    this._client.post(this.url+"auth/register", user).subscribe({
      next : () => {
        console.log("ca marche")
        this._router.navigate(["login"])
      },
      error : (error) => {
        console.log(error.message);
      }

    })
  }

  getAll() : Observable<User[]> {
    //let myHeader : HttpHeaders = new HttpHeaders({"authorization" : "bearer "+ localStorage.getItem("token")})
    return this._client.get<User[]>(this.url + "auth/allUsers")
  }

  setAdmin(id : number) : Observable<any> {
    return this._client.patch<any>(this.url + "auth/setAdmin/"+id, null)
  }
}
