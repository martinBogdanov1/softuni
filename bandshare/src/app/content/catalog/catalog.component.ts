import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBands } from 'src/app/shared/interfaces';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  bands: IBands | undefined;

  constructor(
    private contentSerice: ContentService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.contentSerice.getAllBands().subscribe(content => this.bands = content);
  }

  delete(band: HTMLDivElement, id: string) {
    this.contentSerice.deleteBand(id).subscribe(
      {
        error: (err) => {
          return;
        },
        complete: () => {
          band.remove();
        }
      }
    );
  }
}
