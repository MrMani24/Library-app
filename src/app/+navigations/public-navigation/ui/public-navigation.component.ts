import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-navigation',
  imports: [RouterOutlet , RouterLink],
  templateUrl: './public-navigation.component.html',
  styleUrl: './public-navigation.component.scss'
})
export class PublicNavigationComponent {

}
