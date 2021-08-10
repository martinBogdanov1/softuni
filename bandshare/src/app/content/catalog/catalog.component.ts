import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { IBands } from 'src/app/shared/interfaces';
import { ContentService } from '../content.service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  bands: IBands | undefined;

  get currentUser() {
    return this.userServce.currentUser;
  }

  constructor(
    private contentSerice: ContentService,
    private userServce: UserService
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
        return;
      }
    });
  }
}
