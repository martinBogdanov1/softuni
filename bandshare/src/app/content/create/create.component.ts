
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  get currentUser() {
    return this.userService.loggedUser;
  }

  constructor(
    private contentService: ContentService,
    private router: Router,
    private userService: UserService
  ) { }

  create(form: NgForm): void {
    if (form.invalid) { return; }
    let data = form.value;
    data.ownerId = this.currentUser.objectId;

    this.contentService.createBand(data).subscribe({
      next: () => {
        this.router.navigate(['/bands']);
      },
      error: (err) => {
        console.log(err);
        this.router.navigate(['/error']);
      }
    });
  }
}
