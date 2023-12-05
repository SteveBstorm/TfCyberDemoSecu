import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { ListComponent } from './components/article/list/list.component';
import { CreateComponent } from './components/article/create/create.component';
import { UserlistComponent } from './components/user/userlist/userlist.component';
import { ErrorComponent } from './shared/error/error.component';
import { authGuard } from './shared/guard/auth.guard';
import { adminGuard } from './shared/guard/admin.guard';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/article/update/update.component';

const routes: Routes = [
  {path : "", redirectTo : 'home', pathMatch : "full"},
  {path : "home", component : HomeComponent},
  {path : 'register', canActivate : [authGuard], component : RegisterComponent},
  {path : 'login', canActivate : [authGuard], component : LoginComponent},
  {path : 'userlist', canActivate : [adminGuard], component : UserlistComponent},
  {path : 'article/list', component : ListComponent},
  {path : 'article/create', canActivate : [adminGuard], component : CreateComponent},
  {path : 'article/update/:id', canActivate : [adminGuard], component : UpdateComponent},
  {path : 'error', component : ErrorComponent},
  {path : '**', redirectTo : 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
