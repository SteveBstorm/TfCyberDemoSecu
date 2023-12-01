import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';

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
}
