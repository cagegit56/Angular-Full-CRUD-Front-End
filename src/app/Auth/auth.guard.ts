import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

class myAuth{
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{return true}
  
}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(myAuth).canActivate(route, state);
};
