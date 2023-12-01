import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isConnected! : boolean

  constructor(private _auth : AuthService){}

  ngOnInit(){
    this.isConnected = this._auth.isConnected
    this._auth.isConnectedSubject.subscribe({
      next : (data : boolean) => this.isConnected = data
    })
  }
  logout() {
    this._auth.logout()
  }

}
