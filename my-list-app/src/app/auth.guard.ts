import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = confirm('are you logged in ?');
  return isLoggedIn;
};
