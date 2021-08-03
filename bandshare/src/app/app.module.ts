import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentModule } from './content/content.module';
import { HttpClientModule } from '@angular/common/http'
import { ContentService } from './content/content.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ContentModule,
    HttpClientModule,
    AuthModule,
    CoreModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
