import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  template: `
    <section style="padding: 80px 20px; background: white;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 60px;">
          <h2 style="font-size: 36px; color: #003366; margin-bottom: 20px;">Health & Community Blog</h2>
          <p style="font-size: 18px; color: #666;">Stay informed with our latest health tips and community news</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
          <div style="background: #F5F5F5; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="height: 200px; background: linear-gradient(135deg, #008080, #003366); display: flex; align-items: center; justify-content: center;">
              <div style="font-size: 60px; color: white;">📰</div>
            </div>
            <div style="padding: 30px;">
              <h3 style="font-size: 18px; color: #003366; margin-bottom: 15px;">Heart Health: 10 Tips for a Healthy Heart</h3>
              <p style="color: #666; line-height: 1.5; font-size: 14px; margin-bottom: 15px;">Learn essential tips to maintain cardiovascular health and prevent heart disease through lifestyle changes.</p>
              <button style="color: #008080; background: none; border: none; font-weight: bold; cursor: pointer;">Read More →</button>
            </div>
          </div>
          
          <div style="background: #F5F5F5; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="height: 200px; background: linear-gradient(135deg, #008080, #003366); display: flex; align-items: center; justify-content: center;">
              <div style="font-size: 60px; color: white;">🏥</div>
            </div>
            <div style="padding: 30px;">
              <h3 style="font-size: 18px; color: #003366; margin-bottom: 15px;">Community Health Fair 2024</h3>
              <p style="color: #666; line-height: 1.5; font-size: 14px; margin-bottom: 15px;">Join us for our annual health fair featuring free screenings, health education, and wellness activities.</p>
              <button style="color: #008080; background: none; border: none; font-weight: bold; cursor: pointer;">Read More →</button>
            </div>
          </div>
          
          <div style="background: #F5F5F5; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="height: 200px; background: linear-gradient(135deg, #008080, #003366); display: flex; align-items: center; justify-content: center;">
              <div style="font-size: 60px; color: white;">🩺</div>
            </div>
            <div style="padding: 30px;">
              <h3 style="font-size: 18px; color: #003366; margin-bottom: 15px;">Understanding Diabetes Management</h3>
              <p style="color: #666; line-height: 1.5; font-size: 14px; margin-bottom: 15px;">Comprehensive guide to managing diabetes through diet, exercise, and proper medical care.</p>
              <button style="color: #008080; background: none; border: none; font-weight: bold; cursor: pointer;">Read More →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class BlogComponent {}