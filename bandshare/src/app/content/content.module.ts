import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BandComponent } from './band/band.component';
import { CreateComponent } from './create/create.component';
import { ContentRoutingModule } from './content-routing.module';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    HomeComponent,
    CatalogComponent,
    BandComponent,
    CreateComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    FormsModule
  ]
})
export class ContentModule { }
