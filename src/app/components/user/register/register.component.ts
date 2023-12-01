import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  myFormGroup! : FormGroup

  constructor(private _formBuilder : FormBuilder,
    private _userService : UserService
    ){}

  ngOnInit() {
    this.myFormGroup = this._formBuilder.group({
      nickname : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password : [null, Validators.required],
      confirmPassword : [null, Validators.required]
    })
  }

  onSubmit() {
    console.log(this.myFormGroup.value);
    this._userService.register(this.myFormGroup.value)
  }
}
