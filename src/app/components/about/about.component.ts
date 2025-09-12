import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section style="padding: 80px 20px; background: white;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 60px;">
          <h2 style="font-size: 36px; color: #003366; margin-bottom: 20px;">About Dhanwantari Hospital</h2>
          <p style="font-size: 18px; color: #666; max-width: 600px; margin: 0 auto; line-height: 1.6;">
            Named after the Hindu god of medicine, Dhanwantari Hospital has been serving our community with 
            excellence in healthcare, combining modern medical technology with compassionate care.
          </p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
          <div style="text-align: center; padding: 40px; background: #F5F5F5; border-radius: 12px;">
            <div style="font-size: 60px; margin-bottom: 20px;">❤️</div>
            <h3 style="font-size: 24px; color: #003366; margin-bottom: 15px;">CARE</h3>
            <p style="color: #666; line-height: 1.6;">
              We provide personalized, patient-centered care with attention to every detail of your health journey.
            </p>
          </div>
          <div style="text-align: center; padding: 40px; background: #F5F5F5; border-radius: 12px;">
            <div style="font-size: 60px; margin-bottom: 20px;">🤝</div>
            <h3 style="font-size: 24px; color: #003366; margin-bottom: 15px;">COMPASSION</h3>
            <p style="color: #666; line-height: 1.6;">
              Our team approaches every patient with empathy, understanding, and genuine concern for their wellbeing.
            </p>
          </div>
          <div style="text-align: center; padding: 40px; background: #F5F5F5; border-radius: 12px;">
            <div style="font-size: 60px; margin-bottom: 20px;">👥</div>
            <h3 style="font-size: 24px; color: #003366; margin-bottom: 15px;">COMMUNITY</h3>
            <p style="color: #666; line-height: 1.6;">
              We are committed to improving the health and wellness of our entire community through outreach and education.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}