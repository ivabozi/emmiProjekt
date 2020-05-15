import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { APARTMANIComponent } from './apartmani/apartmani.component';
import { SobeComponent } from './APARTMANI/sobe/sobe.component';
import { HRANAINAPITCIComponent } from './hrana-i-napitci/hrana-i-napitci.component';
import { RestoraniComponent } from './HRANA-I-NAPITCI/restorani/restorani.component';
import { BaroviComponent } from './HRANA-I-NAPITCI/barovi/barovi.component';
import { StudioComponent } from './APARTMANI/studio/studio.component';
import { VjencanjaIProslaveComponent } from './vjencanja-i-proslave/vjencanja-i-proslave.component';
import { VjencanjaComponent } from './Vjencanja-I-proslave/vjencanja/vjencanja.component';
import { RodjendaniComponent } from './Vjencanja-I-proslave/rodjendani/rodjendani.component';
import { PONUDEComponent } from './ponude/ponude.component';
import { AUTORIZACIJAComponent } from './autorizacija/autorizacija.component';
import { SigninComponent } from './AUTORIZACIJA/signin/signin.component';
import { SignupComponent } from './AUTORIZACIJA/signup/signup.component';
import { LIFESTYLEComponent } from './lifestyle/lifestyle.component';
import { WellnessISpaComponent} from './lifestyle/wellness-i-spa/wellness-i-spa.component';
import { ZnamenitostiIAtrakcijeComponent } from './LIFESTYLE/znamenitosti-i-atrakcije/znamenitosti-i-atrakcije.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';


@NgModule({
  declarations: [
    AppComponent,
    APARTMANIComponent,
    SobeComponent,
    HRANAINAPITCIComponent,
    RestoraniComponent,
    BaroviComponent,
    StudioComponent,
    VjencanjaIProslaveComponent,
    VjencanjaComponent,
    RodjendaniComponent,
    PONUDEComponent,
    AUTORIZACIJAComponent,
    SigninComponent,
    SignupComponent,
    LIFESTYLEComponent,
    WellnessISpaComponent,
    ZnamenitostiIAtrakcijeComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
