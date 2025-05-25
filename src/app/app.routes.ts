import { Routes } from '@angular/router';
import { PublicNavigationComponent } from './+navigations/public-navigation/ui/public-navigation.component';
import { PrivateNavigationComponent } from './+navigations/private-navigation/ui/private-navigation.component';
import { LoginComponent } from './+pages/+public/login/ui/login.component';
import { HomeComponent } from './+pages/+public/home/ui/home.component';
import { AboutComponent } from './+pages/+public/about/ui/about.component';
import { PublicBooksComponent } from './+pages/+public/public-books/ui/public-books.component';
import { DashdoardComponent } from './+pages/+private/dashdoard/ui/dashdoard.component';
import { MembersComponent } from './+pages/+private/members/ui/members.component';
import { BooksComponent } from './+pages/+private/books/ui/books.component';

export const routes: Routes = [
  {
    path: 'public', component: PublicNavigationComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'books', component: PublicBooksComponent },
      { path: '', redirectTo: 'home', pathMatch: 'prefix' }
    ]
  },
  {
    path: 'admin', component: PrivateNavigationComponent, children: [
      { path: 'home', component: DashdoardComponent },
      { path: 'about', component: MembersComponent },
      { path: 'books', component: BooksComponent },
      { path: '', redirectTo: 'home', pathMatch: 'prefix' }
    ]
  },
  { path: 'Login', component: LoginComponent },
  { path: '', redirectTo: 'public', pathMatch: 'full' }
];
