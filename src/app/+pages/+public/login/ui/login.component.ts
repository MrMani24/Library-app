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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
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
  router = inject(Router);
  b1: boolean = false;
  b2: boolean = false;
  b3: boolean = false;
  login: login = { username: '', password: '', keepme: false }
  check() {
    if (this.login.username.trim() === 'admin' && this.login.password.trim() === '12345678') {
      //برای در نظر نگرفتن فاصله های کنار مقدار وارد شده trim()
      this.b3 = true;
      setTimeout(()=>{
        this.go();
        console.log(this.login);
      },2500);
    }
    if (this.login.username != '12345678') {
      this.b2 = true;
    }
    if (this.login.username != 'admin') {
      this.b1 = true;
    }
  }
  go() {
    this.router.navigateByUrl('/admin');
  }
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
