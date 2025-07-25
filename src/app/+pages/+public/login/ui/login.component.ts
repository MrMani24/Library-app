import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { map, Observable, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { login } from '../models/login';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../../../+shared/+services/auth.service';
@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    MatCardModule,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  auth = inject(AuthService)
  router = inject(Router);
  login: login = { username: '', password: '', keepme: false };
  massage: string = ''
  massage1: string = ''
  b3: boolean = false;
  check() {
    this.b3 = true;
    setTimeout(() => {
      if (this.auth.check(this.login.username, this.login.password)) {
        //برای در نظر نگرفتن فاصله های کنار مقدار وارد شده trim()
        this.router.navigateByUrl('/admin');
      }
    }, 2000);
  }
  isValid(){
    let a = this.auth.mockUsers.findIndex(m => m.username == this.login.username)
    let b = this.auth.mockUsers.findIndex(m => m.password == this.login.password)
    console.log(a)
    if (a == -1) {
      this.massage = 'نام کاربری درست نمی باشد'
    }
    if (b == -1) {
      this.massage1 = 'کلمه عبور صحیح نمی باشد'
    }
    else{
      this.check()
    }
  }
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
