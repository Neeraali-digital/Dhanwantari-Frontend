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
    { name: 'General Medicine', icon: '🩺', description: 'Comprehensive primary healthcare' },
    { name: 'Critical Care', icon: '🏥', description: 'Intensive care and monitoring' },
    { name: 'OBG', icon: '👶', description: 'Obstetrics and Gynecology care' },
    { name: 'Geriatrics', icon: '👴', description: 'Specialized elderly care' },
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

  makeCall() {
    window.location.href = 'tel:+919036425149';
  }
}