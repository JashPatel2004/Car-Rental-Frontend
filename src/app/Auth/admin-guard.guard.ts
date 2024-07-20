import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const router:Router=inject(Router)
  return router.createUrlTree(['/clientDash']);
};
