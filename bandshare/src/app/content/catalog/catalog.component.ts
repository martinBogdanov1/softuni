import { Component, OnInit } from '@angular/core';
import { IBands } from 'src/app/shared/interfaces';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  bands: IBands | undefined;

  constructor(private contentSerice: ContentService) {
  }

  ngOnInit(): void {
    this.contentSerice.getAllBands().subscribe(content => this.bands = content);
  }
}
