import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../shared/guards/auth.activate';
import { BandComponent } from './band/band.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

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
        component: CreateComponent,
        canActivate: [AuthActivate],
        data: {
          authenticationRequired: true,
          redirectUrl: '/login'
        }
      },
      {
        path: ':bandId',
        component: BandComponent,
      },
      {
        path: 'edit/:bandId',
        component: EditComponent,
        canActivate: [AuthActivate],
        data: {
          authenticationRequired: true,
          redirectUrl: '/login'
        }
      }
     
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
