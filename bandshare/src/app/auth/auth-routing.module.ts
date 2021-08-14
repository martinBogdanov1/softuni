import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { LoginComponent } from './login/login.component';
import { MyBandsComponent } from './my-bands/my-bands.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { 
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: false,
      redirectUrl: '/'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: false,
      redirectUrl: '/'
    }
  },
  {
    path: 'mybands',
    component: MyBandsComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authRedirectUrl: 'user/login',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
