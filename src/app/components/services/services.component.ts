import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding: 120px 40px; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); position: relative;">
      <div style="max-width: 1400px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 80px;">
          <div style="display: inline-block; background: linear-gradient(135deg, #15afa7 0%, #0d8a82 100%); color: white; padding: 8px 24px; border-radius: 50px; font-size: 14px; font-weight: 600; margin-bottom: 24px;">
            🏥 Our Expertise
          </div>
          <h2 style="font-size: 48px; font-weight: 800; color: #1e293b; margin-bottom: 24px; line-height: 1.2;">
            Comprehensive <span style="background: linear-gradient(135deg, #15afa7 0%, #0d8a82 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Healthcare</span> Services
          </h2>
          <p style="font-size: 20px; color: #64748b; max-width: 600px; margin: 0 auto; line-height: 1.6;">
            Advanced medical care across all specialties with state-of-the-art technology and compassionate professionals
          </p>
        </div>
        
        <div class="services-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-bottom: 40px;">
          <div *ngFor="let service of displayedServices" 
               [style.background]="service.highlighted ? service.gradient : 'white'"
               [style.color]="service.highlighted ? 'white' : '#1e293b'"
               [style.transform]="service.highlighted ? 'scale(1.05)' : 'scale(1)'"
               [style.box-shadow]="service.highlighted ? '0 12px 40px rgba(0,0,0,0.15)' : '0 8px 32px rgba(0,0,0,0.08)'"
               style="border-radius: 24px; padding: 40px; border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s; position: relative; overflow: hidden;"
               onmouseover="this.style.transform='translateY(-8px) ' + (this.getAttribute('data-highlighted') === 'true' ? 'scale(1.08)' : 'scale(1)'); this.style.boxShadow='0 20px 60px rgba(0,0,0,0.15)'"
               onmouseout="this.style.transform='translateY(0) ' + (this.getAttribute('data-highlighted') === 'true' ? 'scale(1.05)' : 'scale(1)'); this.style.boxShadow=this.getAttribute('data-highlighted') === 'true' ? '0 12px 40px rgba(0,0,0,0.15)' : '0 8px 32px rgba(0,0,0,0.08)'"
               [attr.data-highlighted]="service.highlighted">
            <div *ngIf="!service.highlighted" [style.position]="'absolute'" [style.top]="'0'" [style.right]="'0'" [style.width]="'100px'" [style.height]="'100px'" [style.background]="service.gradient" [style.border-radius]="'0 24px 0 100px'" [style.opacity]="'0.1'"></div>
            <div [style.width]="'80px'" [style.height]="'80px'" [style.background]="service.highlighted ? 'rgba(255,255,255,0.2)' : service.gradient" [style.border-radius]="'20px'" [style.display]="'flex'" [style.align-items]="'center'" [style.justify-content]="'center'" [style.font-size]="'36px'" [style.margin-bottom]="'24px'" [style.color]="service.highlighted ? 'white' : 'inherit'">{{service.icon}}</div>
            <h3 [style.font-size]="'24px'" [style.font-weight]="'700'" [style.color]="service.highlighted ? 'white' : '#1e293b'" [style.margin-bottom]="'16px'">{{service.title}}</h3>
            <p [style.color]="service.highlighted ? 'rgba(255,255,255,0.9)' : '#64748b'" [style.line-height]="'1.6'" [style.margin-bottom]="'24px'">{{service.description}}</p>
            <div [style.display]="'flex'" [style.align-items]="'center'" [style.color]="service.highlighted ? 'white' : service.color" [style.font-weight]="'600'" [style.cursor]="'pointer'">
              Learn More <span style="margin-left: 8px; transition: all 0.3s;">→</span>
            </div>
          </div>
        </div>
        
        <div style="text-align: center;">
          <button (click)="toggleServices()" style="background: linear-gradient(135deg, #15afa7 0%, #0d8a82 100%); color: white; padding: 16px 32px; border: none; border-radius: 50px; font-size: 18px; font-weight: 600; cursor: pointer; transition: all 0.3s;"
                  onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(21, 175, 167, 0.4)'"
                  onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            {{showAllServices ? 'View Less' : 'View More'}} Services
          </button>
        </div>

      </div>
    </section>
  `,
  styles: [`
    @media (max-width: 1024px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `]
})
export class ServicesComponent {
  showAllServices = false;

  allServices = [
    {
      icon: '🩺',
      title: 'General Medicine',
      description: 'Primary healthcare services including routine check-ups, preventive care, chronic disease management, and health screenings for all ages.',
      gradient: 'linear-gradient(135deg, #15afa7 0%, #0d8a82 100%)',
      color: '#15afa7',
      highlighted: true
    },
    {
      icon: '🏥',
      title: 'Critical Care',
      description: 'Intensive care unit with advanced monitoring, life support systems, and specialized medical team for critically ill patients.',
      gradient: 'linear-gradient(135deg, #15afa7 0%, #0d8a82 100%)',
      color: '#15afa7',
      highlighted: true
    },
    {
      icon: '👶',
      title: 'Obstetrics and Gynecology',
      description: 'Comprehensive women\'s health services including prenatal care, delivery, gynecological treatments, and reproductive health.',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      color: '#06b6d4'
    },
    {
      icon: '👴',
      title: 'Geriatrics',
      description: 'Specialized healthcare for elderly patients focusing on age-related conditions, mobility, cognitive health, and quality of life.',
      gradient: 'linear-gradient(135deg, #15afa7 0%, #0d8a82 100%)',
      color: '#15afa7'
    },
    {
      icon: '🏃',
      title: 'Physiotherapy',
      description: 'Rehabilitation services for injury recovery, pain management, mobility improvement, and sports injury treatment.',
      gradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
      color: '#22c55e'
    },
    {
      icon: '📊',
      title: 'Ultrasound Scanning',
      description: 'Advanced ultrasound imaging services for diagnostic purposes with latest technology and experienced technicians.',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      color: '#8b5cf6'
    },
    {
      icon: '🦴',
      title: 'X-ray',
      description: 'Digital X-ray services for bone fractures, chest imaging, and other diagnostic needs with quick results.',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      color: '#ef4444'
    },
    {
      icon: '🔬',
      title: 'Laboratory',
      description: 'Complete laboratory testing services including blood tests, urine analysis, and other diagnostic tests with accurate results.',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
      color: '#a855f7'
    }
  ];

  get displayedServices() {
    return this.showAllServices ? this.allServices : this.allServices.slice(0, 6);
  }

  toggleServices() {
    this.showAllServices = !this.showAllServices;
  }
}