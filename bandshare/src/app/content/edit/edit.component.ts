import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBand } from 'src/app/shared/interfaces';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  band: IBand | undefined;

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const id = this.activatedRoute.snapshot.params.bandId;
    this.contentService.getBandById(id).subscribe(
      band => this.band = band,
      erorr => this.router.navigate(['/404'])
    );
  }


  edit(bandId: string, form: NgForm): void {
    const data = form.value;
    this.contentService.editBand(bandId, data).subscribe(
      complete => this.router.navigate(['bands/' + bandId])
    )
  }

}
