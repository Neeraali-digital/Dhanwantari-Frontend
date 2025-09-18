import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HealthPackagesComponent } from './components/health-packages/health-packages.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ServicesComponent, GalleryComponent, HealthPackagesComponent, BlogComponent, ContactComponent],
  template: `
    <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;">
      <app-header></app-header>
      
      <main style="padding-top: 80px;">
        <div id="home"><app-home></app-home></div>
        <div id="about"><app-about></app-about></div>
        <div id="services"><app-services></app-services></div>
        <div id="gallery"><app-gallery></app-gallery></div>
        <div id="health-packages"><app-health-packages></app-health-packages></div>
        <div id="blog"><app-blog></app-blog></div>
        <div id="contact"><app-contact></app-contact></div>
      </main>
      
      <app-footer></app-footer>
    </div>
  `
})
export class HomePageComponent {}