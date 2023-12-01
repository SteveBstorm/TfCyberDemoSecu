import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  myFormGroup! : FormGroup

  constructor(
    private _formBuilder : FormBuilder

    ){}

  ngOnInit() {
    this.myFormGroup = this._formBuilder.group({
      nom : ["", Validators.required],
      prix : [0, [Validators.min(0), Validators.max(2500)]],
      categorie : [null, Validators.required],
      description : [null, Validators.required]
    })
  }

  onSubmit() {
    console.log(this.myFormGroup.value);

  }
}
