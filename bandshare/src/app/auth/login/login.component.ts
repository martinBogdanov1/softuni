import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  err: String | undefined;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  login(): void {
    this.userService.login(this.form.value.username, this.form.value.password).subscribe({
      next: () => {
        this.router.navigate(['/bands']);
      },
      error: (err) => {
        if (err.error.code === 101) {
          this.err = 'Invalid email or password!'
        } else {
          this.router.navigate(['/error']);
        }
      }
    })
  }

}
