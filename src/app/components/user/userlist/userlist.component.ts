import { Component } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent {
  userList! : User[]

  constructor(private _userService : UserService){}

  ngOnInit() {
    this.loadItems()
  }

  loadItems() {
    this._userService.getAll().subscribe({
      next : (data : User[]) => this.userList = data
    })
  }

  setAdmin(id : number) {
    this._userService.setAdmin(id).subscribe({
      next : () =>  this.loadItems()
    })
  }
}
