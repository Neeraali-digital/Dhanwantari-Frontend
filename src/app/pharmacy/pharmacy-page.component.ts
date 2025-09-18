import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-pharmacy-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './pharmacy-page.component.html'
})
export class PharmacyPageComponent {
  medicineCategories = [
    { icon: '💊', name: 'Tablets & Capsules', description: 'Oral medications for various conditions' },
    { icon: '💉', name: 'Injections', description: 'Injectable medicines and vaccines' },
    { icon: '🧴', name: 'Syrups & Liquids', description: 'Liquid medications and suspensions' },
    { icon: '🩹', name: 'External Applications', description: 'Creams, ointments, and topical solutions' },
    { icon: '🌿', name: 'Herbal & Ayurvedic', description: 'Natural and traditional medicines' },
    { icon: '👶', name: 'Baby Care', description: 'Pediatric medicines and baby products' },
    { icon: '🦷', name: 'Dental Care', description: 'Oral hygiene and dental health products' },
    { icon: '👁️', name: 'Eye Care', description: 'Eye drops and vision care products' }
  ];

  pharmacyServices = [
    { icon: '🚚', title: 'Free Home Delivery', description: 'All medications delivered to your doorstep at no extra cost. Fast and reliable delivery service available 24/7.' },
    { icon: '⏰', title: '24/7 Available', description: 'Round-the-clock pharmacy services for all your medication needs. Emergency medicines available anytime.' },
    { icon: '✅', title: 'Prescription Verified', description: 'All medications dispensed with proper prescription verification by licensed pharmacists.' },
    { icon: '💰', title: 'Best Prices', description: 'Competitive pricing on all medications with special discounts for regular customers.' },
    { icon: '🔒', title: 'Secure & Safe', description: 'All medications stored in proper conditions and handled with utmost care and safety.' },
    { icon: '👨⚕️', title: 'Expert Consultation', description: 'Free consultation with experienced pharmacists for medication guidance and advice.' }
  ];

  popularMedicines = [
    { icon: '💊', name: 'Paracetamol', use: 'Fever & Pain Relief' },
    { icon: '💊', name: 'Ibuprofen', use: 'Anti-inflammatory' },
    { icon: '💊', name: 'Amoxicillin', use: 'Antibiotic' },
    { icon: '💊', name: 'Omeprazole', use: 'Acidity Relief' },
    { icon: '💊', name: 'Cetirizine', use: 'Allergy Relief' },
    { icon: '💊', name: 'Metformin', use: 'Diabetes Control' },
    { icon: '🧴', name: 'Cough Syrup', use: 'Cold & Cough' },
    { icon: '🩹', name: 'Antiseptic Cream', use: 'Wound Care' }
  ];

  orderSteps = [
    { title: 'Call Us', description: 'Call our 24/7 helpline at +91 9036425149 to place your order' },
    { title: 'Share Prescription', description: 'Share your prescription via WhatsApp or email for verification' },
    { title: 'Get Delivery', description: 'Receive your medicines at your doorstep within 30-60 minutes' }
  ];

  deliveryAreas = [
    { name: 'Chikkabanavara', time: '15-30 mins' },
    { name: 'Jalahalli', time: '20-35 mins' },
    { name: 'Peenya', time: '25-40 mins' },
    { name: 'Mathikere', time: '20-35 mins' },
    { name: 'Yeshwanthpur', time: '30-45 mins' },
    { name: 'Rajajinagar', time: '35-50 mins' },
    { name: 'Malleshwaram', time: '40-55 mins' },
    { name: 'Hebbal', time: '25-40 mins' }
  ];

  orderMedicine() {
    window.location.href = 'tel:+919036425149';
  }
}