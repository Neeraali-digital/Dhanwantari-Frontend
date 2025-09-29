import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GalleryService } from '../../core/services/gallery.service';

@Component({
  selector: 'app-manage-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class ManageGalleryComponent implements OnInit {
  galleryImages: any[] = [];
  loading = false;
  error = '';
  newImage = { title: '', description: '' };
  selectedFile: File | null = null;
  imagePreview: string | null = null;

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
        this.error = 'Failed to load gallery images';
        this.loading = false;
      }
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  uploadImage() {
    if (!this.selectedFile || !this.newImage.title) return;

    const formData = new FormData();
    formData.append('title', this.newImage.title);
    formData.append('description', this.newImage.description);
    formData.append('image', this.selectedFile);

    this.galleryService.createGalleryImage(formData).subscribe({
      next: (image) => {
        this.galleryImages.unshift(image);
        this.newImage = { title: '', description: '' };
        this.selectedFile = null;
        this.imagePreview = null;
        // Reset file input
        const fileInput = document.getElementById('imageFile') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      },
      error: (err) => {
        this.error = 'Failed to upload image';
      }
    });
  }

  deleteGalleryImage(id: number) {
    if (confirm('Are you sure you want to delete this image?')) {
      this.galleryService.deleteGalleryImage(id).subscribe({
        next: () => {
          this.galleryImages = this.galleryImages.filter(img => img.id !== id);
        },
        error: (err) => {
          this.error = 'Failed to delete image';
        }
      });
    }
  }
}
