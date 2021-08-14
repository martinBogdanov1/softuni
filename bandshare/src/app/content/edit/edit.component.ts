import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBand } from 'src/app/shared/interfaces';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  band: IBand | undefined;

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(b => this.band = b.data);
  }

  edit(bandId: string, form: NgForm): void {
    const data = form.value;
    console.log(data);
    
    this.contentService.editBand(bandId, data).subscribe({
    
      next: () => {
        this.router.navigate(['bands/' + bandId]);
      },
      error: (err) => {
        console.log(err);
        this.router.navigate(['/error']);
      }
    });
  }
}
