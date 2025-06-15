import { Routes } from '@angular/router';

import { Home } from './Home_Screen/home/home';
import { About } from './Home_Screen/about/about';
import { ContactUs } from './Home_Screen/contact-us/contact-us';
import { Login  } from './Home_Screen/login/login';
import { Register  } from './Home_Screen/register/register';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: ContactUs },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: '**', component: PageNotFound }
];
