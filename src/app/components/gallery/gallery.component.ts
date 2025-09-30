import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService } from '../../core/services/gallery.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
  galleryImages: any[] = [];
  loading = false;

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    this.loadGalleryImages();
  }

  loadGalleryImages() {
    this.loading = true;
    this.galleryService.getGalleryImages().subscribe({
      next: (images) => {
        this.galleryImages = images;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load gallery images', err);
        this.loading = false;
      }
    });
  }
}
