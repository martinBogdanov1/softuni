import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    PostComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostComponent,
    HomeComponent
  ],

})
export class ContentModule { }
