import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, AboutComponent, ServicesComponent, DoctorsComponent, AppointmentsComponent, ContactComponent, BlogComponent],
  template: `
    <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;">
      <!-- Modern Navigation -->
      <nav style="position: fixed; top: 0; width: 100%; background: rgba(255,255,255,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(0,0,0,0.1); z-index: 1000; padding: 0;">
        <div style="max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 20px 40px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px;">🏥</div>
            <span style="font-size: 24px; font-weight: 700; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Dhanwantari</span>
          </div>
          <div style="display: flex; gap: 40px; align-items: center;">
            <a (click)="scrollTo('home')" style="color: #64748b; cursor: pointer; text-decoration: none; font-weight: 500; transition: all 0.3s; position: relative;" 
               onmouseover="this.style.color='#667eea'" onmouseout="this.style.color='#64748b'">Home</a>
            <a (click)="scrollTo('about')" style="color: #64748b; cursor: pointer; text-decoration: none; font-weight: 500; transition: all 0.3s;"
               onmouseover="this.style.color='#667eea'" onmouseout="this.style.color='#64748b'">About</a>
            <a (click)="scrollTo('services')" style="color: #64748b; cursor: pointer; text-decoration: none; font-weight: 500; transition: all 0.3s;"
               onmouseover="this.style.color='#667eea'" onmouseout="this.style.color='#64748b'">Services</a>
            <a (click)="scrollTo('doctors')" style="color: #64748b; cursor: pointer; text-decoration: none; font-weight: 500; transition: all 0.3s;"
               onmouseover="this.style.color='#667eea'" onmouseout="this.style.color='#64748b'">Doctors</a>
            <a (click)="scrollTo('appointments')" style="color: #64748b; cursor: pointer; text-decoration: none; font-weight: 500; transition: all 0.3s;"
               onmouseover="this.style.color='#667eea'" onmouseout="this.style.color='#64748b'">Book</a>
            <a (click)="scrollTo('contact')" style="color: #64748b; cursor: pointer; text-decoration: none; font-weight: 500; transition: all 0.3s;"
               onmouseover="this.style.color='#667eea'" onmouseout="this.style.color='#64748b'">Contact</a>
          </div>
          <button style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; border: none; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);"
                  onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(102, 126, 234, 0.6)'"
                  onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.4)'">
            Book Now
          </button>
        </div>
      </nav>

      <!-- Main Content -->
      <main style="padding-top: 80px;">
        <div id="home"><app-home></app-home></div>
        <div id="about"><app-about></app-about></div>
        <div id="services"><app-services></app-services></div>
        <div id="doctors"><app-doctors></app-doctors></div>
        <div id="appointments"><app-appointments></app-appointments></div>
        <div id="blog"><app-blog></app-blog></div>
        <div id="contact"><app-contact></app-contact></div>
      </main>

      <!-- Modern Floating Action Button -->
      <button style="position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border: none; border-radius: 50%; color: white; font-size: 24px; cursor: pointer; box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4); transition: all 0.3s; z-index: 1000;"
              onmouseover="this.style.transform='scale(1.1)'; this.style.boxShadow='0 12px 40px rgba(102, 126, 234, 0.6)'"
              onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 8px 32px rgba(102, 126, 234, 0.4)'">
        💬
      </button>

      <!-- Modern Footer -->
      <footer style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; padding: 80px 40px 40px;">
        <div style="max-width: 1400px; margin: 0 auto;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 60px; margin-bottom: 60px;">
            <div>
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
                <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px;">🏥</div>
                <span style="font-size: 24px; font-weight: 700;">Dhanwantari</span>
              </div>
              <p style="color: rgba(255,255,255,0.8); line-height: 1.6; margin-bottom: 24px;">Transforming healthcare with compassion, innovation, and excellence. Your health is our priority.</p>
              <div style="display: flex; gap: 16px;">
                <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s;"
                     onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">📘</div>
                <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s;"
                     onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">🐦</div>
                <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s;"
                     onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">📷</div>
              </div>
            </div>
            <div>
              <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">Quick Links</h4>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <a (click)="scrollTo('home')" style="color: rgba(255,255,255,0.8); cursor: pointer; text-decoration: none; transition: all 0.3s;"
                   onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.8)'">Home</a>
                <a (click)="scrollTo('about')" style="color: rgba(255,255,255,0.8); cursor: pointer; text-decoration: none; transition: all 0.3s;"
                   onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.8)'">About Us</a>
                <a (click)="scrollTo('services')" style="color: rgba(255,255,255,0.8); cursor: pointer; text-decoration: none; transition: all 0.3s;"
                   onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.8)'">Services</a>
                <a (click)="scrollTo('doctors')" style="color: rgba(255,255,255,0.8); cursor: pointer; text-decoration: none; transition: all 0.3s;"
                   onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.8)'">Doctors</a>
              </div>
            </div>
            <div>
              <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">Services</h4>
              <div style="display: flex; flex-direction: column; gap: 12px; color: rgba(255,255,255,0.8);">
                <span>Emergency Care</span>
                <span>Cardiology</span>
                <span>Orthopedics</span>
                <span>Pediatrics</span>
              </div>
            </div>
            <div>
              <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">Contact Info</h4>
              <div style="display: flex; flex-direction: column; gap: 16px; color: rgba(255,255,255,0.8);">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span>📍</span>
                  <span>123 Healthcare Ave, Medical District</span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span>📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span>✉️</span>
                  <span>info&#64;dhanwantari.com</span>
                </div>
              </div>
            </div>
          </div>
          <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 40px; text-align: center; color: rgba(255,255,255,0.6);">
            <p>&copy; 2024 Dhanwantari Hospital. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class AppComponent {
  scrollTo(elementId: string) {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
  }
}