import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding: 80px 20px; background: #f8fafc;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-center; margin-bottom: 60px;">
          <h2 style="font-size: 48px; font-weight: 800; color: #1e293b; margin-bottom: 16px;">Hospital Gallery</h2>
          <p style="font-size: 20px; color: #64748b;">Take a virtual tour of our modern facilities</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
          <div *ngFor="let image of galleryImages" style="position: relative; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); transition: transform 0.3s;"
               onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <div style="width: 100%; height: 250px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 48px;">
              {{ image.icon }}
            </div>
            <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 20px;">
              <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">{{ image.title }}</h3>
              <p style="font-size: 14px; opacity: 0.9;">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class GalleryComponent {
  galleryImages = [
    { icon: '🏥', title: 'Hospital Exterior', description: 'Modern hospital building with state-of-the-art architecture' },
    { icon: '🛏️', title: 'Patient Rooms', description: 'Comfortable and well-equipped patient accommodation' },
    { icon: '⚕️', title: 'Operation Theater', description: 'Advanced surgical facilities with latest technology' },
    { icon: '🔬', title: 'Laboratory', description: 'Fully equipped diagnostic and pathology lab' },
    { icon: '🚑', title: 'Emergency Ward', description: '24/7 emergency care with rapid response team' },
    { icon: '💊', title: 'Pharmacy', description: '24-hour pharmacy with comprehensive medication stock' },
    { icon: '🏃', title: 'Physiotherapy', description: 'Modern rehabilitation and physiotherapy center' },
    { icon: '👶', title: 'Pediatric Ward', description: 'Child-friendly environment for young patients' },
    { icon: '🧠', title: 'ICU', description: 'Intensive care unit with advanced monitoring systems' }
  ];
}