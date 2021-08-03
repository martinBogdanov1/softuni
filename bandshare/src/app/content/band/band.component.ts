import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBand } from 'src/app/shared/interfaces';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {
  band: IBand | undefined;

  constructor(
    private contentService: ContentService,
    private activatedRout: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.band = undefined;
    const id = this.activatedRout.snapshot.params.bandId;
    this.contentService.getBandById(id).subscribe(band => this.band = band);
  }

}
