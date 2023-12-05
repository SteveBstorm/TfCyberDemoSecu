import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  let authService : AuthService = inject(AuthService)
  let router : Router = inject(Router)
  if(authService.connectedUser?.role != "Admin"){
    router.navigate(["toto"])
    return false;
}


  return true;
};
