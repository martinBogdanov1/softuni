import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandComponent } from './band/band.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { 
    path: 'bands',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CatalogComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: ':bandId',
        component: BandComponent
      },
     
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
