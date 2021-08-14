import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppInterceptorProvider } from './app.interceptor';
import { ContentService } from './services/content.service';
import { UserService } from './services/user.service';
import { AuthActivate } from './guards/auth.activate';
import { BandResolver } from './guards/permission.activate';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    AppInterceptorProvider,
    ContentService,
    UserService,
    AuthActivate,
    BandResolver
  ]
})
export class CoreModule { }
