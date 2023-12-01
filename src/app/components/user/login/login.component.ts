import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email! : string
  password! : string

  constructor(private _authService : AuthService){}

  onSubmit() {
    this._authService.login(this.email, this.password)
  }
}
