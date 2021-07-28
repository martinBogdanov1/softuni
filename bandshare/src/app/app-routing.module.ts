import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './content/components/catalog/catalog.component';
import { HomeComponent } from './content/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'bands', component: CatalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
