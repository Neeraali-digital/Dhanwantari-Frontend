import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { HealthPackagesComponent } from './components/health-packages/health-packages.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ServicesComponent, GalleryComponent, ContactComponent, BlogComponent, HealthPackagesComponent, LoaderComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isLoading = true;

  private staticImages = [
    'assets/slide1.jpg',
    'assets/images/pharmacy.jpg',
    'assets/images/general_medicine.png',
    'assets/images/critical_care.png',
    'assets/images/obstetrics_and_gynecology.png',
    'assets/images/geriatrics.png',
    'assets/images/emergency.png',
    'assets/images/surgery.png'
  ];

  ngOnInit() {
    this.preloadImages().then(() => {
      // Ensure minimum 3 seconds loading time
      const minLoadTime = 3000;
      const preloadTime = Date.now() - this.startTime;
      const remainingTime = minLoadTime - preloadTime;
      
      if (remainingTime > 0) {
        setTimeout(() => {
          this.isLoading = false;
        }, remainingTime);
      } else {
        this.isLoading = false;
      }
    });
  }

  private startTime = Date.now();

  private preloadImages(): Promise<void> {
    const promises = this.staticImages.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(null);
        img.onerror = () => {
          console.warn(`Failed to preload image: ${src}`);
          resolve(null); // Continue even if one fails
        };
        img.src = src;
      });
    });

    return Promise.all(promises).then(() => {
      console.log('All static images preloaded');
    });
  }
}
