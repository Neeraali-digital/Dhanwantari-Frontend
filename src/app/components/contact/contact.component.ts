import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section style="padding: 80px 20px; background: #F5F5F5;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 60px;">
          <h2 style="font-size: 36px; color: #003366; margin-bottom: 20px;">Contact Us</h2>
          <p style="font-size: 18px; color: #666;">Get in touch with our team</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 60px;">
          <div>
            <form style="background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <div style="margin-bottom: 25px;">
                <label style="display: block; margin-bottom: 8px; font-weight: bold; color: #003366;">Name</label>
                <input type="text" style="width: 100%; padding: 15px; border: 1px solid #ddd; border-radius: 8px; box-sizing: border-box;">
              </div>
              <div style="margin-bottom: 25px;">
                <label style="display: block; margin-bottom: 8px; font-weight: bold; color: #003366;">Email</label>
                <input type="email" style="width: 100%; padding: 15px; border: 1px solid #ddd; border-radius: 8px; box-sizing: border-box;">
              </div>
              <div style="margin-bottom: 25px;">
                <label style="display: block; margin-bottom: 8px; font-weight: bold; color: #003366;">Subject</label>
                <input type="text" style="width: 100%; padding: 15px; border: 1px solid #ddd; border-radius: 8px; box-sizing: border-box;">
              </div>
              <div style="margin-bottom: 25px;">
                <label style="display: block; margin-bottom: 8px; font-weight: bold; color: #003366;">Message</label>
                <textarea style="width: 100%; padding: 15px; border: 1px solid #ddd; border-radius: 8px; height: 120px; box-sizing: border-box; resize: vertical;"></textarea>
              </div>
              <button style="width: 100%; background: #008080; color: white; padding: 15px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer;">
                Send Message
              </button>
            </form>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 30px;">
            <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <span style="font-size: 24px; margin-right: 15px;">📍</span>
                <h3 style="font-size: 20px; color: #003366;">Address</h3>
              </div>
              <p style="color: #666; line-height: 1.5;">No. 18, Medrahalli Main Road<br>Chikkabanavara, Bangalore - 560090</p>
              <div style="margin-top: 20px; height: 150px; background: #E5E5E5; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #666;">
                Google Maps Embed
              </div>
            </div>
            
            <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <span style="font-size: 24px; margin-right: 15px;">📞</span>
                <h3 style="font-size: 20px; color: #003366;">Phone</h3>
              </div>
              <p style="color: #666;">+91 9036425149, +91 9036422149</p>
            </div>
            
            <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <span style="font-size: 24px; margin-right: 15px;">✉️</span>
                <h3 style="font-size: 20px; color: #003366;">Email</h3>
              </div>
              <p style="color: #666;">admin&#64;dhanwantarihospitals.com</p>
            </div>
          </div>
        </div>
        
        <div style="margin-top: 60px; background: #FFE6E6; border: 2px solid #FF9999; border-radius: 12px; padding: 40px; text-align: center;">
          <div style="font-size: 48px; margin-bottom: 20px;">🚨</div>
          <h3 style="font-size: 24px; color: #CC0000; margin-bottom: 15px;">Emergency Contact</h3>
          <p style="color: #CC0000; margin-bottom: 25px;">For life-threatening emergencies, call immediately</p>
          <a href="tel:+919606654149" style="background: #CC0000; color: white; padding: 15px 40px; border: none; border-radius: 8px; font-size: 18px; font-weight: bold; cursor: pointer; text-decoration: none; display: inline-block;">
            Call +91 9606654149
          </a>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}