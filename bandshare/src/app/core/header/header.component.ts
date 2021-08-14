import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: IUser | undefined;

  get currentUser() {
    return this.userService.loggedUser;
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
