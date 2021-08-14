import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { BandResolver } from '../core/guards/permission.activate';
import { BandComponent } from './band/band.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [

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
      redirectUrl: 'user/login'
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
      authRedirectUrl: 'user/login',
      ownershipRedirectUrl: '/',

    },
    resolve: {
      data: BandResolver
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
