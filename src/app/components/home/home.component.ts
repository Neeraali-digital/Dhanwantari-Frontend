import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section style="min-height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); position: relative; overflow: hidden; display: flex; align-items: center;">
      <!-- Animated Background Elements -->
      <div style="position: absolute; top: 10%; left: 10%; width: 200px; height: 200px; background: rgba(255,255,255,0.1); border-radius: 50%; animation: float 6s ease-in-out infinite;"></div>
      <div style="position: absolute; top: 60%; right: 15%; width: 150px; height: 150px; background: rgba(255,255,255,0.08); border-radius: 50%; animation: float 8s ease-in-out infinite reverse;"></div>
      <div style="position: absolute; bottom: 20%; left: 20%; width: 100px; height: 100px; background: rgba(255,255,255,0.06); border-radius: 50%; animation: float 10s ease-in-out infinite;"></div>
      
      <div style="max-width: 1400px; margin: 0 auto; padding: 0 40px; width: 100%; z-index: 2; position: relative;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;">
          <!-- Left Content -->
          <div style="color: white;">
            <div style="display: inline-block; background: rgba(255,255,255,0.2); padding: 8px 20px; border-radius: 50px; font-size: 14px; font-weight: 600; margin-bottom: 32px; backdrop-filter: blur(10px);">
              ✨ Trusted Healthcare Since 1999
            </div>
            <h1 style="font-size: 64px; font-weight: 800; line-height: 1.1; margin-bottom: 24px; background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              Your Health,<br>Our <span style="background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Priority</span>
            </h1>
            <p style="font-size: 20px; line-height: 1.6; margin-bottom: 16px; color: rgba(255,255,255,0.9);">
              CARE • COMPASSION • COMMUNITY
            </p>
            <p style="font-size: 18px; line-height: 1.7; margin-bottom: 48px; color: rgba(255,255,255,0.8); max-width: 500px;">
              Experience world-class healthcare with cutting-edge technology, compassionate care, and a commitment to your wellbeing that spans over two decades.
            </p>
            <div style="display: flex; gap: 20px; align-items: center;">
              <button style="background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); color: #1f2937; padding: 16px 32px; border: none; border-radius: 50px; font-size: 16px; font-weight: 700; cursor: pointer; transition: all 0.3s; box-shadow: 0 8px 32px rgba(251, 191, 36, 0.4);"
                      onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 12px 40px rgba(251, 191, 36, 0.6)'"
                      onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(251, 191, 36, 0.4)'">
                🗓️ Book Appointment
              </button>
              <button style="background: rgba(255,255,255,0.2); color: white; padding: 16px 32px; border: 2px solid rgba(255,255,255,0.3); border-radius: 50px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s; backdrop-filter: blur(10px);"
                      onmouseover="this.style.background='rgba(255,255,255,0.3)'; this.style.borderColor='rgba(255,255,255,0.5)'"
                      onmouseout="this.style.background='rgba(255,255,255,0.2)'; this.style.borderColor='rgba(255,255,255,0.3)'">
                🎥 Virtual Tour
              </button>
            </div>
          </div>
          
          <!-- Right Visual -->
          <div style="position: relative;">
            <div style="width: 100%; height: 500px; background: rgba(255,255,255,0.15); border-radius: 32px; backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
              <!-- Medical Icons Floating -->
              <div style="position: absolute; top: 20%; left: 20%; font-size: 40px; animation: float 4s ease-in-out infinite;">🏥</div>
              <div style="position: absolute; top: 30%; right: 25%; font-size: 35px; animation: float 5s ease-in-out infinite reverse;">💊</div>
              <div style="position: absolute; bottom: 30%; left: 30%; font-size: 30px; animation: float 6s ease-in-out infinite;">🩺</div>
              <div style="position: absolute; bottom: 25%; right: 20%; font-size: 38px; animation: float 7s ease-in-out infinite reverse;">❤️</div>
              
              <!-- Center Icon -->
              <div style="font-size: 120px; opacity: 0.8;">👩‍⚕️</div>
              
              <!-- Stats Cards -->
              <div style="position: absolute; top: -20px; right: -20px; background: rgba(255,255,255,0.9); padding: 20px; border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); backdrop-filter: blur(10px);">
                <div style="color: #1f2937; font-weight: 700; font-size: 24px;">25+</div>
                <div style="color: #6b7280; font-size: 12px;">Years Experience</div>
              </div>
              <div style="position: absolute; bottom: -20px; left: -20px; background: rgba(255,255,255,0.9); padding: 20px; border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); backdrop-filter: blur(10px);">
                <div style="color: #1f2937; font-weight: 700; font-size: 24px;">50K+</div>
                <div style="color: #6b7280; font-size: 12px;">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Quick Stats -->
        <div style="margin-top: 80px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px;">
          <div style="text-align: center; color: white;">
            <div style="font-size: 36px; font-weight: 800; margin-bottom: 8px;">24/7</div>
            <div style="color: rgba(255,255,255,0.8);">Emergency Care</div>
          </div>
          <div style="text-align: center; color: white;">
            <div style="font-size: 36px; font-weight: 800; margin-bottom: 8px;">100+</div>
            <div style="color: rgba(255,255,255,0.8);">Expert Doctors</div>
          </div>
          <div style="text-align: center; color: white;">
            <div style="font-size: 36px; font-weight: 800; margin-bottom: 8px;">15min</div>
            <div style="color: rgba(255,255,255,0.8);">Avg Wait Time</div>
          </div>
          <div style="text-align: center; color: white;">
            <div style="font-size: 36px; font-weight: 800; margin-bottom: 8px;">98%</div>
            <div style="color: rgba(255,255,255,0.8);">Patient Satisfaction</div>
          </div>
        </div>
      </div>
      
      <style>
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      </style>
    </section>
  `
})
export class HomeComponent {}