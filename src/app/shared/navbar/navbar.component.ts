import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ConnectedUser } from '../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isConnected! : boolean

  connectedUser! : ConnectedUser | undefined

  constructor(private _auth : AuthService){}

  ngOnInit(){
    // this.isConnected = this._auth.isConnected
    // this._auth.isConnectedSubject.subscribe({
    //   next : (data : boolean) => this.isConnected = data
    // })

    this.connectedUser = this._auth.connectedUser
    this._auth.connectedUserSubject.subscribe({
      next : (data : ConnectedUser | undefined) => this.connectedUser = data
    })
  }
  logout() {
    this._auth.logout()
  }

}
