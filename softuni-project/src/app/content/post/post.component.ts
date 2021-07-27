import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  object = {} || undefined;
  constructor(private contentService: ContentService) {
  }
  ngOnInit(): void {
    this.fetchContent();
  }

  fetchContent(): void {
    this.object = undefined
    this.contentService.getAllContent().subscribe(object => console.log(object));
  }

}
