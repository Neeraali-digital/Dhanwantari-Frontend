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
  compressedFile: File | null = null;
  imagePreview: string | null = null;
  compressing = false;
  uploadLoading = false;
  editingImage: any = null;
  formData = { title: '', description: '' };

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
      this.compressing = true;
      this.compressImage(file).then(compressed => {
        this.compressedFile = compressed;
        this.selectedFile = file; // Keep original for preview
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target?.result as string;
          this.compressing = false;
        };
        reader.readAsDataURL(file);
      }).catch(err => {
        console.error('Compression failed', err);
        this.selectedFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target?.result as string;
          this.compressing = false;
        };
        reader.readAsDataURL(file);
      });
    }
  }

  async compressImage(file: File): Promise<File> {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        const maxWidth = 1920;
        const maxHeight = 1080;
        let { width, height } = img;

        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx?.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          if (blob) {
            const compressedFile = new File([blob], file.name, { type: file.type });
            resolve(compressedFile);
          } else {
            reject(new Error('Compression failed'));
          }
        }, file.type, 0.8); // 80% quality
      };
      img.src = URL.createObjectURL(file);
    });
  }

  uploadImage() {
    if (!this.selectedFile || !this.formData.title) return;

    this.uploadLoading = true;
    const formData = new FormData();
    formData.append('title', this.formData.title);
    formData.append('description', this.formData.description);
    formData.append('image', this.compressedFile || this.selectedFile);

    this.galleryService.createGalleryImage(formData).subscribe({
      next: (image) => {
        this.galleryImages.unshift(image);
        this.formData = { title: '', description: '' };
        this.selectedFile = null;
        this.compressedFile = null;
        this.imagePreview = null;
        this.uploadLoading = false;
        // Reset file input
        const fileInput = document.getElementById('imageFile') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      },
      error: (err) => {
        this.error = 'Failed to upload image';
        this.uploadLoading = false;
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

  editGalleryImage(image: any) {
    this.editingImage = { ...image };
    this.formData = { title: image.title, description: image.description };
    this.imagePreview = image.image;
    this.selectedFile = null;
    this.compressedFile = null;
  }

  cancelEdit() {
    this.editingImage = null;
    this.formData = { title: '', description: '' };
    this.selectedFile = null;
    this.compressedFile = null;
    this.imagePreview = null;
  }

  updateGalleryImage() {
    if (!this.formData.title.trim()) {
      this.error = 'Title is required';
      return;
    }

    const formData = new FormData();
    formData.append('title', this.formData.title);
    formData.append('description', this.formData.description || '');
    if (this.compressedFile) {
      formData.append('image', this.compressedFile);
    }

    this.galleryService.updateGalleryImage(this.editingImage.id, formData).subscribe({
      next: () => {
        this.loadGalleryImages();
        this.cancelEdit();
      },
      error: (err) => {
        this.error = 'Failed to update image';
      }
    });
  }
}
