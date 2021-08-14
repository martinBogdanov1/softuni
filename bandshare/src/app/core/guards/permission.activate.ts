import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserService } from "src/app/core/services/user.service";
import { ContentService } from "src/app/core/services/content.service";
import { IBand } from "../../shared/interfaces";

@Injectable()
export class BandResolver implements Resolve<IBand> {
  band: IBand | undefined;
  get currentUser() {
    return this.userService.loggedUser;
  }
  constructor(
    private contentService: ContentService,
    private userService: UserService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    return this.contentService.getBandById(route.paramMap.get('bandId')!).pipe(map((data: IBand) => {

      if (data.ownerId === this.currentUser.objectId) {
        return data;
      }
      
      return this.router.navigate([route.data.ownershipRedirectUrl]);
    }));
  }
}