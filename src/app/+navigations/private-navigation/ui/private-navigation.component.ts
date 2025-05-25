import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-navigation',
  imports: [RouterOutlet , RouterLink],
  templateUrl: './private-navigation.component.html',
  styleUrl: './private-navigation.component.scss'
})
export class PrivateNavigationComponent {
  router= inject(Router)
  singout(){
    this.router.navigateByUrl('Login');
  }
}
