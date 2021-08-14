import { Component, OnInit } from '@angular/core';
import { IBands } from 'src/app/shared/interfaces';
import { ContentService } from '../../core/services/content.service';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  bands: IBands | undefined;

  get currentUser() {
    return this.userServce.loggedUser;
  }

  constructor (
    private contentSerice: ContentService,
    private userServce: UserService,
    private router: Router
  ) {
    this.getBands();
  }

  getBands(): void {
    this.bands = undefined;
    this.contentSerice.getAllBands().subscribe(content => this.bands = content);
  }


  delete(band: HTMLDivElement, id: string) {
    this.contentSerice.deleteBand(id).subscribe({
      next: () => {
        band.remove();
        this.getBands();
      },
      error: (err) => {
        console.log(err);
        this.router.navigate(['/error']);
      }
    });
  }
}
