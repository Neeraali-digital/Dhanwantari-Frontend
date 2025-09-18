import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomePageComponent } from './app/home-page.component';
import { PharmacyPageComponent } from './app/pharmacy/pharmacy-page.component';

const routes = [
  { path: '', component: HomePageComponent },
  { path: 'pharmacy', component: PharmacyPageComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));