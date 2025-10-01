import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-advertisements',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-advertisements.component.html',
  styleUrls: ['./manage-advertisements.component.css']
})
export class ManageAdvertisementsComponent implements OnInit {
  advertisements: any[] = [];
  selectedAdvertisement: any = null;
  isEditing = false;
  isLoading = false;
  errorMessage = '';

  newAdvertisement = {
    title: '',
    description: '',
    is_active: true,
    image: null
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAdvertisements();
  }

  loadAdvertisements() {
    this.isLoading = true;
    this.http.get('http://34.229.12.11:8000/api/advertisements/').subscribe({
      next: (data: any) => {
        this.advertisements = data;
        this.isLoading = false;
      },
      error: (error: any) => {
        this.errorMessage = 'Failed to load advertisements';
        this.isLoading = false;
        console.error('Error loading advertisements:', error);
      }
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.newAdvertisement.image = file;
    }
  }

  createAdvertisement() {
    if (!this.newAdvertisement.title.trim()) {
      this.errorMessage = 'Title is required';
      return;
    }

    const formData = new FormData();
    formData.append('title', this.newAdvertisement.title);
    formData.append('description', this.newAdvertisement.description || '');
    formData.append('is_active', this.newAdvertisement.is_active.toString());
    if (this.newAdvertisement.image) {
      formData.append('image', this.newAdvertisement.image);
    }

    this.isLoading = true;
    this.http.post('http://34.229.12.11:8000/api/advertisements/', formData).subscribe({
      next: () => {
        this.loadAdvertisements();
        this.resetForm();
        this.isLoading = false;
      },
      error: (error: any) => {
        this.errorMessage = 'Failed to create advertisement';
        this.isLoading = false;
        console.error('Error creating advertisement:', error);
      }
    });
  }

  editAdvertisement(advertisement: any) {
    this.selectedAdvertisement = { ...advertisement };
    this.isEditing = true;
  }

  updateAdvertisement() {
    if (!this.selectedAdvertisement.title.trim()) {
      this.errorMessage = 'Title is required';
      return;
    }

    const formData = new FormData();
    formData.append('title', this.selectedAdvertisement.title);
    formData.append('description', this.selectedAdvertisement.description || '');
    formData.append('is_active', this.selectedAdvertisement.is_active.toString());
    if (this.selectedAdvertisement.image && typeof this.selectedAdvertisement.image !== 'string') {
      formData.append('image', this.selectedAdvertisement.image);
    }

    this.isLoading = true;
    this.http.put(`http://34.229.12.11:8000/api/advertisements/${this.selectedAdvertisement.id}/`, formData).subscribe({
      next: () => {
        this.loadAdvertisements();
        this.cancelEdit();
        this.isLoading = false;
      },
      error: (error: any) => {
        this.errorMessage = 'Failed to update advertisement';
        this.isLoading = false;
        console.error('Error updating advertisement:', error);
      }
    });
  }

  deleteAdvertisement(id: number) {
    if (confirm('Are you sure you want to delete this advertisement?')) {
      this.isLoading = true;
      this.http.delete(`http://34.229.12.11:8000/api/advertisements/${id}/`).subscribe({
        next: () => {
          this.loadAdvertisements();
          this.isLoading = false;
        },
        error: (error: any) => {
          this.errorMessage = 'Failed to delete advertisement';
          this.isLoading = false;
          console.error('Error deleting advertisement:', error);
        }
      });
    }
  }

  cancelEdit() {
    this.selectedAdvertisement = null;
    this.isEditing = false;
  }

  resetForm() {
    this.newAdvertisement = {
      title: '',
      description: '',
      is_active: true,
      image: null
    };
    this.errorMessage = '';
  }

  onEditFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedAdvertisement.image = file;
    }
  }

  get isSelectedImageString(): boolean {
    return this.selectedAdvertisement?.image && typeof this.selectedAdvertisement.image === 'string';
  }

  get currentTitle(): string {
    return this.selectedAdvertisement ? this.selectedAdvertisement.title : this.newAdvertisement.title;
  }

  set currentTitle(value: string) {
    if (this.selectedAdvertisement) {
      this.selectedAdvertisement.title = value;
    } else {
      this.newAdvertisement.title = value;
    }
  }

  get currentDescription(): string {
    return this.selectedAdvertisement ? this.selectedAdvertisement.description : this.newAdvertisement.description;
  }

  set currentDescription(value: string) {
    if (this.selectedAdvertisement) {
      this.selectedAdvertisement.description = value;
    } else {
      this.newAdvertisement.description = value;
    }
  }

  get currentIsActive(): boolean {
    return this.selectedAdvertisement ? this.selectedAdvertisement.is_active : this.newAdvertisement.is_active;
  }

  set currentIsActive(value: boolean) {
    if (this.selectedAdvertisement) {
      this.selectedAdvertisement.is_active = value;
    } else {
      this.newAdvertisement.is_active = value;
    }
  }
}
