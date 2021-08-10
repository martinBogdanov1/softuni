import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';
import { IBand } from 'src/app/shared/interfaces';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {
  band: IBand | undefined;

  get currentUser() {
    return this.userService.currentUser;
  }

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.bandId;
    this.contentService.getBandById(id).subscribe({
      next: (band) => {
        this.band = band;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  delete(id: string) {
    this.contentService.deleteBand(id).subscribe({
      next: () => {
        this.router.navigate(['/bands'])
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
