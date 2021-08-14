import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { sameValueAsFactory } from 'src/app/shared/validators';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {

  form: FormGroup;
  err: String | undefined;
  killSubscription = new Subject();

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      rePassword: ['', [Validators.required, Validators.minLength(4), sameValueAsFactory(() =>
        this.form?.get('password'),
        this.killSubscription)]]
    });
  }
  
  register(): void {
    let form = this.form;
    if (form.invalid) { return; }
    form.value.username = form.value.email;
    delete form.value.rePassword;

    this.userService.register(form.value).subscribe({
      error: (err) => {
        if (err.error.code == 202) {
          this.err = 'There is an existing account associated with this email already!'
        } else {
          this.router.navigate(['/error']);
        }
      },
      complete: () => {
        this.userService.login(form.value.username, form.value.password).subscribe({
          next: () => {
            this.router.navigate(['/']);
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.killSubscription.next();
    this.killSubscription.complete();
  }
}
