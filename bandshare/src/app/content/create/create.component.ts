
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(
    private contentService: ContentService,
    private router: Router
  ) { }

  create(form: NgForm): void {
    if (form.invalid) { return; }
    const data = form.value;
    this.contentService.createBand(data).subscribe({
      next:() => {
        this.router.navigate(['/bands']);
      },
      error: (err) => {
        this.router.navigate(['/404']);
      }
    });
  }

}
