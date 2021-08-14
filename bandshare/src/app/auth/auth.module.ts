import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../core/services/user.service';
import { MyBandsComponent } from './my-bands/my-bands.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MyBandsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
  ]
})
export class AuthModule { }
