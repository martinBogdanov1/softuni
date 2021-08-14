import { Component } from '@angular/core';
import { IBands } from 'src/app/shared/interfaces';
import { ContentService } from '../../core/services/content.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './my-bands.component.html',
  styleUrls: ['./my-bands.component.scss'],
})
export class MyBandsComponent {
  bands: IBands | undefined;

  get currentUser() {
    return this.userServce.loggedUser;
  }

  constructor(
    private contentSerice: ContentService,
    private userServce: UserService
  ) {
    this.getBands();
  }

  getBands(): void {
    this.bands = undefined;
    this.contentSerice.getBandsByOwnerId(this.currentUser.objectId).subscribe(content => this.bands = content);
  }


  delete(band: HTMLDivElement, id: string) {
    this.contentSerice.deleteBand(id).subscribe({
      next: () => {
        band.remove();
        this.getBands();
      }
    });
  }
}