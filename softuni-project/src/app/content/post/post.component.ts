import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  constructor(private contentService: ContentService) {
  }
  ngOnInit(): void {
    this.fetchContent();
  }

  fetchContent(): void {
    this.contentService.getAllContent().subscribe(object => console.log(object));
  }

}
