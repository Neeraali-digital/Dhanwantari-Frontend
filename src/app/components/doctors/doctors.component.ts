import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors',
  standalone: true,
  template: `
    <section style="padding: 80px 20px; background: white;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 60px;">
          <h2 style="font-size: 36px; color: #003366; margin-bottom: 20px;">Our Expert Doctors</h2>
          <p style="font-size: 18px; color: #666;">Meet our experienced medical professionals</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
          <div style="background: #F5F5F5; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="height: 200px; background: linear-gradient(135deg, #008080, #003366); display: flex; align-items: center; justify-content: center;">
              <div style="font-size: 80px; color: white;">👩⚕️</div>
            </div>
            <div style="padding: 30px;">
              <h3 style="font-size: 20px; color: #003366; margin-bottom: 5px;">Dr. Sarah Johnson</h3>
              <p style="color: #008080; font-weight: bold; margin-bottom: 15px;">Chief of Cardiology</p>
              <p style="color: #666; line-height: 1.5; font-size: 14px;">15+ years experience in interventional cardiology with expertise in complex cardiac procedures.</p>
            </div>
          </div>
          
          <div style="background: #F5F5F5; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="height: 200px; background: linear-gradient(135deg, #008080, #003366); display: flex; align-items: center; justify-content: center;">
              <div style="font-size: 80px; color: white;">👨⚕️</div>
            </div>
            <div style="padding: 30px;">
              <h3 style="font-size: 20px; color: #003366; margin-bottom: 5px;">Dr. Michael Chen</h3>
              <p style="color: #008080; font-weight: bold; margin-bottom: 15px;">Orthopedic Surgeon</p>
              <p style="color: #666; line-height: 1.5; font-size: 14px;">Specializes in joint replacement and sports medicine with over 12 years of experience.</p>
            </div>
          </div>
          
          <div style="background: #F5F5F5; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="height: 200px; background: linear-gradient(135deg, #008080, #003366); display: flex; align-items: center; justify-content: center;">
              <div style="font-size: 80px; color: white;">👩⚕️</div>
            </div>
            <div style="padding: 30px;">
              <h3 style="font-size: 20px; color: #003366; margin-bottom: 5px;">Dr. Emily Rodriguez</h3>
              <p style="color: #008080; font-weight: bold; margin-bottom: 15px;">Pediatrician</p>
              <p style="color: #666; line-height: 1.5; font-size: 14px;">Board-certified pediatrician dedicated to providing compassionate care for children.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DoctorsComponent {}