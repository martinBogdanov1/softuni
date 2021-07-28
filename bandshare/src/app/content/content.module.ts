import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';




@NgModule({
  declarations: [
    HomeComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    CatalogComponent
  ],

})
export class ContentModule { }
