import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  specialties = [
    { name: 'Cardiology', icon: '❤️', description: 'Advanced heart care and treatment' },
    { name: 'Neurology', icon: '🧠', description: 'Expert neurological services' },
    { name: 'Orthopedics', icon: '🦴', description: 'Bone and joint specialists' },
    { name: 'Pediatrics', icon: '👶', description: 'Comprehensive child healthcare' },
    { name: 'Emergency', icon: '🚑', description: '24/7 emergency services' },
    { name: 'Surgery', icon: '⚕️', description: 'Advanced surgical procedures' }
  ];


  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.specialties.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.specialties.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}