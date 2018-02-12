import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PlayerService } from '../api/player/player.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const logged = this.playerService.player.logged;
    if (!logged) this.router.navigate(['/']);
    return logged;
  }
}
