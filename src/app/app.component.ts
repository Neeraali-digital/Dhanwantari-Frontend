import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';

import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { HealthPackagesComponent } from './components/health-packages/health-packages.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ServicesComponent, GalleryComponent, ContactComponent, BlogComponent, HealthPackagesComponent, PharmacyComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
}