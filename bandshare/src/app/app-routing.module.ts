import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { ErrorComponent } from './shared/error/error.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'bands',
    loadChildren: () => import('./content/content.module').then(m => m.ContentModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
