import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckupPackageService } from '../../core/services/checkup-package.service';

@Component({
  selector: 'app-health-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './health-packages.component.html'
})
export class HealthPackagesComponent implements OnInit {
  packages: any[] = [];
  loading = false;

  constructor(private checkupPackageService: CheckupPackageService) {}

  ngOnInit() {
    this.loadPackages();
  }

  loadPackages() {
    this.loading = true;
    this.checkupPackageService.getCheckupPackages().subscribe({
      next: (data) => {
        this.packages = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading packages:', error);
        this.loading = false;
      }
    });
  }

  openWhatsApp() {
   window.open('https://wa.me/+919606654149', '_blank');
  }
}
