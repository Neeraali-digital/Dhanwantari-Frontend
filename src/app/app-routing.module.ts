import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { PharmacyPageComponent } from './pharmacy/pharmacy-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'pharmacy', component: PharmacyPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }