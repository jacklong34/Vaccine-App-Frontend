import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './Components/home/home.component';
import { LandingComponent } from './Components/landing/landing.component';
import { PharmacyComponent } from './Components/pharmacy/pharmacy.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'pharmacy', component: PharmacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
