import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManageAppointmentsComponent } from './admin/manage-appointments/manage-appointments.component';
import { ManageBlogComponent } from './admin/manage-blog/blog.component';
import { ManageContactsComponent } from './admin/manage-contacts/contact.component';
import { ManageGalleryComponent } from './admin/manage-gallery/gallery.component';

import { AuthGuard } from './core/guards/auth.guard';
import { ManageServicesComponent } from './admin/manage-services/services.component';
import { ManageCheckupPackagesComponent } from './admin/manage-checkup-packages/manage-checkup-packages.component';
import { ManageAdvertisementsComponent } from './admin/manage-advertisements/manage-advertisements.component';

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
      { path: 'manage-checkup-packages', component: ManageCheckupPackagesComponent },
      { path: 'manage-advertisements', component: ManageAdvertisementsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
