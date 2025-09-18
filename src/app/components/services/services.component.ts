import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section style="padding: 120px 40px; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); position: relative;">
      <div style="max-width: 1400px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 80px;">
          <div style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 8px 24px; border-radius: 50px; font-size: 14px; font-weight: 600; margin-bottom: 24px;">
            🏥 Our Expertise
          </div>
          <h2 style="font-size: 48px; font-weight: 800; color: #1e293b; margin-bottom: 24px; line-height: 1.2;">
            Comprehensive <span style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Healthcare</span> Services
          </h2>
          <p style="font-size: 20px; color: #64748b; max-width: 600px; margin: 0 auto; line-height: 1.6;">
            Advanced medical care across all specialties with state-of-the-art technology and compassionate professionals
          </p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px;">
          <!-- Emergency Care -->
          <div style="background: white; border-radius: 24px; padding: 40px; box-shadow: 0 8px 32px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s; position: relative; overflow: hidden;"
               onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 60px rgba(0,0,0,0.15)'"
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.08)'">
            <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); border-radius: 0 24px 0 100px; opacity: 0.1;"></div>
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 36px; margin-bottom: 24px;">🚨</div>
            <h3 style="font-size: 24px; font-weight: 700; color: #1e293b; margin-bottom: 16px;">Emergency Care</h3>
            <p style="color: #64748b; line-height: 1.6; margin-bottom: 24px;">24/7 emergency services with rapid response times, advanced life support, and trauma care specialists ready to handle any medical emergency.</p>
            <div style="display: flex; align-items: center; color: #ef4444; font-weight: 600; cursor: pointer;">
              Learn More <span style="margin-left: 8px; transition: all 0.3s;">→</span>
            </div>
          </div>

          <!-- Critical Care - HIGHLIGHTED -->
          <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 24px; padding: 40px; box-shadow: 0 12px 40px rgba(245, 158, 11, 0.3); border: 3px solid #f59e0b; transition: all 0.3s; position: relative; overflow: hidden; transform: scale(1.05);"
               onmouseover="this.style.transform='translateY(-8px) scale(1.08)'; this.style.boxShadow='0 20px 60px rgba(245, 158, 11, 0.4)'"
               onmouseout="this.style.transform='translateY(0) scale(1.05)'; this.style.boxShadow='0 12px 40px rgba(245, 158, 11, 0.3)'">
            <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.2); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 36px; margin-bottom: 24px; color: white;">🏥</div>
            <h3 style="font-size: 24px; font-weight: 700; color: white; margin-bottom: 16px;">Critical Care</h3>
            <p style="color: rgba(255,255,255,0.9); line-height: 1.6; margin-bottom: 24px;">Intensive care unit with advanced monitoring, life support systems, and specialized medical team for critically ill patients.</p>
            <div style="display: flex; align-items: center; color: white; font-weight: 600; cursor: pointer;">
              Learn More <span style="margin-left: 8px; transition: all 0.3s;">→</span>
            </div>
          </div>

          <!-- Orthopedics -->
          <div style="background: white; border-radius: 24px; padding: 40px; box-shadow: 0 8px 32px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s; position: relative; overflow: hidden;"
               onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 60px rgba(0,0,0,0.15)'"
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.08)'">
            <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); border-radius: 0 24px 0 100px; opacity: 0.1;"></div>
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 36px; margin-bottom: 24px;">🦴</div>
            <h3 style="font-size: 24px; font-weight: 700; color: #1e293b; margin-bottom: 16px;">Orthopedics</h3>
            <p style="color: #64748b; line-height: 1.6; margin-bottom: 24px;">Comprehensive bone and joint care including joint replacement, sports medicine, spine surgery, and rehabilitation services for optimal mobility.</p>
            <div style="display: flex; align-items: center; color: #8b5cf6; font-weight: 600; cursor: pointer;">
              Learn More <span style="margin-left: 8px; transition: all 0.3s;">→</span>
            </div>
          </div>

          <!-- OBG -->
          <div style="background: white; border-radius: 24px; padding: 40px; box-shadow: 0 8px 32px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s; position: relative; overflow: hidden;"
               onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 60px rgba(0,0,0,0.15)'"
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.08)'">
            <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); border-radius: 0 24px 0 100px; opacity: 0.1;"></div>
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 36px; margin-bottom: 24px;">👶</div>
            <h3 style="font-size: 24px; font-weight: 700; color: #1e293b; margin-bottom: 16px;">Obstetrics & Gynecology</h3>
            <p style="color: #64748b; line-height: 1.6; margin-bottom: 24px;">Comprehensive women's health services including prenatal care, delivery, gynecological treatments, and reproductive health.</p>
            <div style="display: flex; align-items: center; color: #06b6d4; font-weight: 600; cursor: pointer;">
              Learn More <span style="margin-left: 8px; transition: all 0.3s;">→</span>
            </div>
          </div>

          <!-- General Medicine - HIGHLIGHTED -->
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 24px; padding: 40px; box-shadow: 0 12px 40px rgba(16, 185, 129, 0.3); border: 3px solid #10b981; transition: all 0.3s; position: relative; overflow: hidden; transform: scale(1.05);"
               onmouseover="this.style.transform='translateY(-8px) scale(1.08)'; this.style.boxShadow='0 20px 60px rgba(16, 185, 129, 0.4)'"
               onmouseout="this.style.transform='translateY(0) scale(1.05)'; this.style.boxShadow='0 12px 40px rgba(16, 185, 129, 0.3)'">
            <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.2); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 36px; margin-bottom: 24px; color: white;">🩺</div>
            <h3 style="font-size: 24px; font-weight: 700; color: white; margin-bottom: 16px;">General Medicine</h3>
            <p style="color: rgba(255,255,255,0.9); line-height: 1.6; margin-bottom: 24px;">Primary healthcare services including routine check-ups, preventive care, chronic disease management, and health screenings for all ages.</p>
            <div style="display: flex; align-items: center; color: white; font-weight: 600; cursor: pointer;">
              Learn More <span style="margin-left: 8px; transition: all 0.3s;">→</span>
            </div>
          </div>

          <!-- Geriatrics -->
          <div style="background: white; border-radius: 24px; padding: 40px; box-shadow: 0 8px 32px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s; position: relative; overflow: hidden;"
               onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 60px rgba(0,0,0,0.15)'"
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.08)'">
            <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 0 24px 0 100px; opacity: 0.1;"></div>
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 36px; margin-bottom: 24px;">👴</div>
            <h3 style="font-size: 24px; font-weight: 700; color: #1e293b; margin-bottom: 16px;">Geriatrics</h3>
            <p style="color: #64748b; line-height: 1.6; margin-bottom: 24px;">Specialized healthcare for elderly patients focusing on age-related conditions, mobility, cognitive health, and quality of life.</p>
            <div style="display: flex; align-items: center; color: #667eea; font-weight: 600; cursor: pointer;">
              Learn More <span style="margin-left: 8px; transition: all 0.3s;">→</span>
            </div>
          </div>

          <!-- Physiotherapy -->
          <div style="background: white; border-radius: 24px; padding: 40px; box-shadow: 0 8px 32px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s; position: relative; overflow: hidden;"
               onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 60px rgba(0,0,0,0.15)'"
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.08)'">
            <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); border-radius: 0 24px 0 100px; opacity: 0.1;"></div>
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 36px; margin-bottom: 24px;">🏃</div>
            <h3 style="font-size: 24px; font-weight: 700; color: #1e293b; margin-bottom: 16px;">Physiotherapy</h3>
            <p style="color: #64748b; line-height: 1.6; margin-bottom: 24px;">Rehabilitation services for injury recovery, pain management, mobility improvement, and sports injury treatment.</p>
            <div style="display: flex; align-items: center; color: #22c55e; font-weight: 600; cursor: pointer;">
              Learn More <span style="margin-left: 8px; transition: all 0.3s;">→</span>
            </div>
          </div>

          <!-- Diagnostic Services -->
          <div style="background: white; border-radius: 24px; padding: 40px; box-shadow: 0 8px 32px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s; position: relative; overflow: hidden;"
               onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 60px rgba(0,0,0,0.15)'"
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.08)'">
            <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%); border-radius: 0 24px 0 100px; opacity: 0.1;"></div>
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 36px; margin-bottom: 24px;">🔬</div>
            <h3 style="font-size: 24px; font-weight: 700; color: #1e293b; margin-bottom: 16px;">Diagnostic Services</h3>
            <p style="color: #64748b; line-height: 1.6; margin-bottom: 24px;">Complete diagnostic services including X-ray, Ultrasound scanning, and comprehensive Laboratory testing with quick results.</p>
            <div style="display: flex; align-items: center; color: #a855f7; font-weight: 600; cursor: pointer;">
              Learn More <span style="margin-left: 8px; transition: all 0.3s;">→</span>
            </div>
          </div>

          <!-- 24-Hour Pharmacy -->
          <div style="background: white; border-radius: 24px; padding: 40px; box-shadow: 0 8px 32px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s; position: relative; overflow: hidden;"
               onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 20px 60px rgba(0,0,0,0.15)'"
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.08)'">
            <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); border-radius: 0 24px 0 100px; opacity: 0.1;"></div>
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 36px; margin-bottom: 24px;">💊</div>
            <h3 style="font-size: 24px; font-weight: 700; color: #1e293b; margin-bottom: 16px;">24-Hour Pharmacy</h3>
            <p style="color: #64748b; line-height: 1.6; margin-bottom: 24px;">Round-the-clock pharmacy services with free home delivery. All medications available with prescription verification.</p>
            <div style="display: flex; align-items: center; color: #f97316; font-weight: 600; cursor: pointer;">
              Order Now <span style="margin-left: 8px; transition: all 0.3s;">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {}