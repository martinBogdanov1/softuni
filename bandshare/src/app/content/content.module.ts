import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BandComponent } from './band/band.component';
import { CreateComponent } from './create/create.component';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    CatalogComponent,
    BandComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
})
export class ContentModule { }
