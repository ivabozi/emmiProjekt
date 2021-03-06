import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// dodala sam putanje za stranice koje zelim vidjeti
import { APARTMANIComponent } from './apartmani/apartmani.component';
import { HRANAINAPITCIComponent } from './hrana-i-napitci/hrana-i-napitci.component';
import { LIFESTYLEComponent } from './lifestyle/lifestyle.component';
import { VjencanjaIProslaveComponent } from './vjencanja-i-proslave/vjencanja-i-proslave.component';
import { PONUDEComponent } from './ponude/ponude.component';
import { SignupComponent } from './AUTORIZACIJA/signup/signup.component';
import { SigninComponent } from './AUTORIZACIJA/signin/signin.component';
import { HomeComponent } from './home/home.component';


// ovdje sam morala u listu dodati puteve (gdje su komponente locirane) i komponente

const routes: Routes = [
  {path: 'apartmani', component: APARTMANIComponent},
  {path: 'HRANA-I-NAPITCI', component: HRANAINAPITCIComponent},
  {path: 'hranainapitci', redirectTo: 'HRANA-I-NAPITCI', pathMatch: 'full'},
  {path: 'LIFESTYLE', component: LIFESTYLEComponent},
  {path: 'Vjencanja-I-Proslave', component: VjencanjaIProslaveComponent},
  {path: 'vjencanjaiproslave', redirectTo: 'Vjencanja-I-Proslave', pathMatch: 'full'},
  {path: 'PONUDE', component: PONUDEComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
