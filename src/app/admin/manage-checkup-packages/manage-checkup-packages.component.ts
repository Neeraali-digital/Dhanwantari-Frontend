import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckupPackageService } from 'src/app/core/services/checkup-package.service';


@Component({
  selector: 'app-manage-checkup-packages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-checkup-packages.component.html',
  styleUrls: ['./manage-checkup-packages.component.css']
})
export class ManageCheckupPackagesComponent implements OnInit {
  checkupPackages: any[] = [];
  loading = false;
  error = '';
  newPackage = { name: '', description: '', price: 0, image: null, benefits: [] as string[] };
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  saving = false;

  constructor(private checkupPackageService: CheckupPackageService) {}

  ngOnInit() {
    this.loadCheckupPackages();
  }

  loadCheckupPackages() {
    this.loading = true;
    this.checkupPackageService.getCheckupPackages().subscribe({
      next: (packages) => {
        this.checkupPackages = packages;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load checkup packages';
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

  savePackage() {
    if (!this.newPackage.name || !this.newPackage.price) return;

    this.saving = true;
    const formData = new FormData();
    formData.append('name', this.newPackage.name);
    formData.append('description', this.newPackage.description);
    formData.append('price', this.newPackage.price.toString());
    formData.append('benefits', JSON.stringify(this.newPackage.benefits));
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.checkupPackageService.createCheckupPackage(formData).subscribe({
      next: (pkg) => {
        this.checkupPackages.unshift(pkg);
        this.resetForm();
        this.saving = false;
      },
      error: () => {
        this.error = 'Failed to save checkup package';
        this.saving = false;
      }
    });
  }

  resetForm() {
    this.newPackage = { name: '', description: '', price: 0, image: null, benefits: [] as string[] };
    this.selectedFile = null;
    this.imagePreview = null;
    this.error = '';
  }

  deletePackage(id: number) {
    if (confirm('Are you sure you want to delete this checkup package?')) {
      this.checkupPackageService.deleteCheckupPackage(id).subscribe({
        next: () => {
          this.checkupPackages = this.checkupPackages.filter(pkg => pkg.id !== id);
        },
        error: () => {
          this.error = 'Failed to delete checkup package';
        }
      });
    }
  }

  get benefitsText(): string {
    return this.newPackage.benefits.join('\n');
  }

  set benefitsText(value: string) {
    this.newPackage.benefits = value.split('\n').map(b => b.trim()).filter(b => b) as string[];
  }
}
