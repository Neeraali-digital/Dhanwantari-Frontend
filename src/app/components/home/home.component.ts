import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementService } from '../../core/services/advertisement.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  slideInterval: any;
  slides: any[] = [];
  isSlidesPaused = false;
  progressPercent = 0;
  progressInterval: any;

  currentHeroSlide = 0;
  heroSlideInterval: any;
  heroSlides = [
    {
      image: '../../../assets/slide1.jpg',
      text: 'Your Health, Our Priority.\nCompassionate Care. Advanced Treatment. Trusted Expertise.\nCare. Compassion. Community'
    },
    {
      image: '../../../assets/images/pharmacy.jpg',
      text: '24/7 Pharmacy – Free Home Delivery at Your Doorstep'
    }
  ];
  isHeroPaused = false;

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: Event) {
    const target = event.target as HTMLElement;
    if (target.closest('.slider-container')) {
      this.pauseSlideShow();
    } else if (target.closest('.hero-slider')) {
      this.pauseHeroSlideShow();
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: Event) {
    const target = event.target as HTMLElement;
    if (target.closest('.slider-container')) {
      this.resumeSlideShow();
    } else if (target.closest('.hero-slider')) {
      this.resumeHeroSlideShow();
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.prevSlide();
    } else if (event.key === 'ArrowRight') {
      this.nextSlide();
    }
  }

  specialties = [
    { name: 'General Medicine', icon: 'health_and_safety', description: 'Comprehensive primary healthcare', image: '../../../assets/images/general_medicine.png' },
    { name: 'Critical Care', icon: 'local_hospital', description: 'Intensive care and monitoring', image: '../../../assets/images/critical_care.png' },
    { name: 'OBG', icon: 'pregnant_woman', description: 'Obstetrics and Gynecology care', image: '../../../assets/images/obstetrics_and_gynecology.png' },
    { name: 'Geriatrics', icon: 'elderly', description: 'Specialized elderly care', image: '../../../assets/images/geriatrics.png' },
    { name: 'Emergency', icon: 'emergency', description: '24/7 emergency services', image: '../../../assets/images/emergency.png' },
    { name: 'Surgery', icon: '⚕️', description: 'Advanced surgical procedures', image: '../../../assets/images/surgery.png' }
  ];

  medicineCategories = [
    { icon: 'medication', name: 'Tablets & Capsules', description: 'Oral medications for various conditions' },
    { icon: 'vaccines', name: 'Injections', description: 'Injectable medicines and vaccines' },
    { icon: 'science', name: 'Syrups & Liquids', description: 'Liquid medications and suspensions' },
    { icon: 'healing', name: 'External Applications', description: 'Creams, ointments, and topical solutions' },
    { icon: 'eco', name: 'Herbal & Ayurvedic', description: 'Natural and traditional medicines' },
    { icon: 'child_care', name: 'Baby Care', description: 'Pediatric medicines and baby products' },
    { icon: 'dental_care', name: 'Dental Care', description: 'Oral hygiene and dental health products' },
    { icon: 'visibility', name: 'Eye Care', description: 'Eye drops and vision care products' }
  ];

  pharmacyServices = [
    { icon: '🚚', title: 'Free Home Delivery', description: 'All medications delivered to your doorstep at no extra cost. Fast and reliable delivery service available 24/7.' },
    { icon: '⏰', title: '24/7 Available', description: 'Round-the-clock pharmacy services for all your medication needs. Emergency medicines available anytime.' },
    { icon: '✅', title: 'Prescription Verified', description: 'All medications dispensed with proper prescription verification by licensed pharmacists.' },
    { icon: '💰', title: 'Best Prices', description: 'Competitive pricing on all medications with special discounts for regular customers.' },
    { icon: '🔒', title: 'Secure & Safe', description: 'All medications stored in proper conditions and handled with utmost care and safety.' },
    { icon: '👨⚕️', title: 'Expert Consultation', description: 'Free consultation with experienced pharmacists for medication guidance and advice.' }
  ];

  orderSteps = [
    { title: 'Call Us', description: 'Call our 24/7 helpline at +91 9036425149 to place your order' },
    { title: 'Share Prescription', description: 'Share your prescription via WhatsApp or email for verification' },
    { title: 'Get Delivery', description: 'Receive your medicines at your doorstep within 30-60 minutes' }
  ];

  showDeliveryAreas = false;

  deliveryAreas = [
    { name: 'Chikkabanavara', time: '15-30 mins' },
    { name: 'Jalahalli', time: '20-35 mins' },
    { name: 'Peenya', time: '25-40 mins' },
    { name: 'Mathikere', time: '20-35 mins' },
    { name: 'Yeshwanthpur', time: '30-45 mins' },
    { name: 'Kereguddadahalli', time: '20-35 mins' },
    { name: 'T Dasarahalli', time: '25-40 mins' },
    { name: 'Mallasandra', time: '30-45 mins' },
    { name: 'Abbigere', time: '35-50 mins' },
    { name: 'Somashettihalli', time: '40-55 mins' },
    { name: 'Malleshwaram', time: '40-55 mins' }
  ];

  constructor(private advertisementService: AdvertisementService) {}

  ngOnInit() {
    this.startHeroSlideShow();
    this.advertisementService.getAdvertisements().subscribe({
      next: (ads: any[]) => {
        const activeAds = ads.filter(ad => ad.is_active);
        const adSlides = activeAds.map(ad => ({
          name: ad.title,
          description: ad.description || '',
          image: ad.image.startsWith('https') ? ad.image : 'https://api.neeraali.com' + ad.image
        }));
        this.slides = [...this.specialties, ...adSlides];
        this.startSlideShow();
      },
      error: (error) => {
        console.error('Error fetching advertisements:', error);
        this.slides = [...this.specialties];
        this.startSlideShow();
      }
    });
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    if (this.heroSlideInterval) {
      clearInterval(this.heroSlideInterval);
    }
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
    this.startProgress();
  }

  startProgress() {
    this.progressPercent = 0;
    this.progressInterval = setInterval(() => {
      this.progressPercent += 1;
      if (this.progressPercent >= 100) {
        this.progressPercent = 0;
      }
    }, 40);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.progressPercent = 0;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
    this.progressPercent = 0;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.progressPercent = 0;
  }

  startHeroSlideShow() {
    this.heroSlideInterval = setInterval(() => {
      this.nextHeroSlide();
    }, 3000);
  }

  nextHeroSlide() {
    this.currentHeroSlide = (this.currentHeroSlide + 1) % this.heroSlides.length;
  }

  goToHeroSlide(index: number) {
    this.currentHeroSlide = index;
  }

  pauseSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  resumeSlideShow() {
    if (!this.slideInterval) {
      this.startSlideShow();
    }
  }

  pauseHeroSlideShow() {
    if (this.heroSlideInterval) {
      clearInterval(this.heroSlideInterval);
      this.heroSlideInterval = null;
    }
  }

  resumeHeroSlideShow() {
    if (!this.heroSlideInterval) {
      this.startHeroSlideShow();
    }
  }

  makeCall() {
    window.location.href = 'tel:+919036425149';
  }

  orderMedicine() {
    window.location.href = 'tel:+919036425149';
  }

  toggleDeliveryAreas() {
    this.showDeliveryAreas = !this.showDeliveryAreas;
  }

  scrollToPackages() {
    const element = document.getElementById('health-packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openWhatsApp() {
    window.open('https://wa.me/+919606654149', '_blank');
  }
}
