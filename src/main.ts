
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { HomePageComponent } from './app/home-page.component';
import { LayoutComponent } from './app/admin/layout/layout.component';
import { LoginComponent } from './app/admin/login/login.component';
import { DashboardComponent } from './app/admin/dashboard/dashboard.component';
import { ManageAppointmentsComponent } from './app/admin/manage-appointments/manage-appointments.component';
import { ManageBlogComponent } from './app/admin/manage-blog/blog.component';
import { ManageContactsComponent } from './app/admin/manage-contacts/contact.component';
import { ManageGalleryComponent } from './app/admin/manage-gallery/gallery.component';
import { ManageServicesComponent } from './app/admin/manage-services/services.component';
import { AuthGuard } from './app/core/guards/auth.guard';
import { AuthInterceptor } from './app/core/interceptors/auth.interceptor';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'admin/login', component: LoginComponent },
  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'manage-appointments', component: ManageAppointmentsComponent },
      { path: 'manage-blog', component: ManageBlogComponent },
      { path: 'manage-contacts', component: ManageContactsComponent },
      { path: 'manage-gallery', component: ManageGalleryComponent },
      { path: 'manage-services', component: ManageServicesComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule, ReactiveFormsModule),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
}).catch(err => console.error(err));
