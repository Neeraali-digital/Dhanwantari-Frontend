import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckupPackageService } from '../../core/services/checkup-package.service';

@Component({
  selector: 'app-health-packages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding: 120px 40px; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); min-height: 100vh;">
      <div style="max-width: 1400px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 80px;">
          <div style="display: inline-block; background: linear-gradient(135deg, #15afa7 0%, #0d8a82 100%); color: white; padding: 8px 24px; border-radius: 50px; font-size: 14px; font-weight: 600; margin-bottom: 24px;">
            💊 Health Packages
          </div>
          <h2 style="font-size: 48px; font-weight: 800; color: #1e293b; margin-bottom: 24px; line-height: 1.2;">
            Comprehensive Health <span style="background: linear-gradient(135deg, #15afa7 0%, #0d8a82 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Checkup Packages</span>
          </h2>
          <p style="font-size: 20px; color: #64748b; max-width: 600px; margin: 0 auto; line-height: 1.6;">
            Choose from our carefully designed health packages for complete wellness monitoring and early detection.
          </p>
        </div>

        <!-- Packages Grid -->
        <div class="packages-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px; margin-bottom: 80px;">
          <div *ngFor="let pkg of packages; let i = index"
               [style.background]="i === 1 ? 'linear-gradient(135deg, #15afa7 0%, #0d8a82 100%)' : 'white'"
               [style.color]="i === 1 ? 'white' : '#1e293b'"
               style="border-radius: 24px; padding: 40px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); transition: all 0.3s; border: 2px solid transparent; position: relative; overflow: hidden;"
               onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 60px rgba(102, 126, 234, 0.15)'; this.style.borderColor='#667eea'"
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.1)'; this.style.borderColor='transparent'">
            <div *ngIf="i === 0" style="position: absolute; top: 0; right: 0; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 8px 16px; border-radius: 0 24px 0 16px; font-size: 12px; font-weight: 600;">
              POPULAR
            </div>
            <div *ngIf="i === 1" style="position: absolute; top: 0; right: 0; background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); color: #1f2937; padding: 8px 16px; border-radius: 0 24px 0 16px; font-size: 12px; font-weight: 600;">
              RECOMMENDED
            </div>
            <div *ngIf="i === 2" style="position: absolute; top: 0; right: 0; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); color: white; padding: 8px 16px; border-radius: 0 24px 0 16px; font-size: 12px; font-weight: 600;">
              EXECUTIVE
            </div>
            <div style="font-size: 48px; margin-bottom: 24px;">{{ i === 0 ? '🩺' : i === 1 ? '🏆' : '💎' }}</div>
            <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 16px;">{{ pkg.name }}</h3>
            <div style="font-size: 36px; font-weight: 800; color: #15afa7; margin-bottom: 8px;">₹{{ pkg.price }}</div>

            <div style="margin-bottom: 32px;">
              <div *ngFor="let benefit of pkg.benefits" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <div style="width: 20px; height: 20px; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">✓</div>
                <span>{{ benefit }}</span>
              </div>
            </div>

            <button style="width: 100%; background: linear-gradient(135deg, #15afa7 0%, #0d8a82 100%); color: white; padding: 16px; border: none; border-radius: 12px; font-weight: 600; cursor: pointer; transition: all 0.3s;"
                    onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(21, 175, 167, 0.4)'"
                    onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              📅 Book Now
            </button>
          </div>
        </div>

        <!-- Additional Services -->
        <div style="background: white; border-radius: 24px; padding: 60px; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
          <h3 style="font-size: 32px; font-weight: 700; color: #1e293b; text-align: center; margin-bottom: 48px;">
            Additional Services
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px;">
            <div style="text-align: center; padding: 24px;">
              <div style="font-size: 48px; margin-bottom: 16px;">🏠</div>
              <h4 style="font-size: 18px; font-weight: 600; color: #1e293b; margin-bottom: 12px;">Home Sample Collection</h4>
              <p style="color: #64748b; line-height: 1.6;">Convenient sample collection from your home with trained phlebotomists.</p>
            </div>
            <div style="text-align: center; padding: 24px;">
              <div style="font-size: 48px; margin-bottom: 16px;">📱</div>
              <h4 style="font-size: 18px; font-weight: 600; color: #1e293b; margin-bottom: 12px;">Digital Reports</h4>
              <p style="color: #64748b; line-height: 1.6;">Get your reports digitally with detailed analysis and recommendations.</p>
            </div>
            <div style="text-align: center; padding: 24px;">
              <div style="font-size: 48px; margin-bottom: 16px;">👨‍⚕️</div>
              <h4 style="font-size: 18px; font-weight: 600; color: #1e293b; margin-bottom: 12px;">Expert Consultation</h4>
              <p style="color: #64748b; line-height: 1.6;">Free consultation with our specialists to discuss your health reports.</p>
            </div>
            <div style="text-align: center; padding: 24px;">
              <div style="font-size: 48px; margin-bottom: 16px;">🔄</div>
              <h4 style="font-size: 18px; font-weight: 600; color: #1e293b; margin-bottom: 12px;">Follow-up Care</h4>
              <p style="color: #64748b; line-height: 1.6;">Comprehensive follow-up care and health monitoring programs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
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
}
