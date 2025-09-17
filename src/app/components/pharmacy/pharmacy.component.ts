import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pharmacy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding: 80px 20px; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white;">
      <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
        <div style="font-size: 64px; margin-bottom: 24px;">💊</div>
        <h2 style="font-size: 48px; font-weight: 800; margin-bottom: 24px;">24-Hour Pharmacy</h2>
        <p style="font-size: 20px; margin-bottom: 40px; opacity: 0.9;">Round-the-clock pharmacy services with free home delivery</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 60px;">
          <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 16px; backdrop-filter: blur(10px);">
            <div style="font-size: 48px; margin-bottom: 16px;">🚚</div>
            <h3 style="font-size: 24px; margin-bottom: 16px;">Free Home Delivery</h3>
            <p style="opacity: 0.9;">All medications delivered to your doorstep at no extra cost</p>
          </div>
          
          <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 16px; backdrop-filter: blur(10px);">
            <div style="font-size: 48px; margin-bottom: 16px;">⏰</div>
            <h3 style="font-size: 24px; margin-bottom: 16px;">24/7 Available</h3>
            <p style="opacity: 0.9;">Round-the-clock service for all your medication needs</p>
          </div>
          
          <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 16px; backdrop-filter: blur(10px);">
            <div style="font-size: 48px; margin-bottom: 16px;">✅</div>
            <h3 style="font-size: 24px; margin-bottom: 16px;">Prescription Verified</h3>
            <p style="opacity: 0.9;">All medications dispensed with proper prescription verification</p>
          </div>
        </div>
        
        <div style="margin-top: 50px;">
          <button (click)="orderMedicine()" style="background: white; color: #f97316; padding: 16px 32px; border: none; border-radius: 50px; font-size: 18px; font-weight: 600; cursor: pointer; transition: all 0.3s;"
                  onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.2)'"
                  onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            📞 Order Medicine Now
          </button>
        </div>
      </div>
    </section>
  `
})
export class PharmacyComponent {
  orderMedicine() {
    window.location.href = 'tel:+919036425149';
  }
}