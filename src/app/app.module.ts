import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import swal from 'sweetalert2';


import { AppComponent } from './app.component';

import { SidebarComponent } from './structure/sidebar/sidebar.component';
import { NavbarComponent } from './structure/navbar/navbar.component';
import { FooterbarComponent } from './structure/footerbar/footerbar.component';

import { IdeaProviderRegistrationComponent } from './registration-management/idea-provider-registration/idea-provider-registration.component';
import { FormerRegistrationComponent } from './registration-management/former-registration/former-registration.component';
import { InvestorRegistrationComponent } from './registration-management/investor-registration/investor-registration.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login-management/login-component/login-component';
import { FormerProfileComponent } from './envirements/former-envirement/former-profile/former-profile.component';
import { FormerActivitiesComponent } from './envirements/former-envirement/former-activities/former-activities.component';
import { IdeaProviderActivitiesComponent } from './envirements/ideaProvider-envirement/idea-provider-activities/idea-provider-activities.component';
import { IdeaProviderProfileComponent } from './envirements/ideaProvider-envirement/idea-provider-profile/idea-provider-profile.component';
import { InvestorProfileComponent } from './envirements/investor-envirement/investor-profile/investor-profile.component';
import { InvestorActivitiesComponent } from './envirements/investor-envirement/investor-activities/investor-activities.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterbarComponent,
    IdeaProviderRegistrationComponent,
    FormerRegistrationComponent,
    InvestorRegistrationComponent,
    PageNotFoundComponent,
    HomeComponentComponent,
    LoginComponent,
    FormerProfileComponent,
    FormerActivitiesComponent,
    IdeaProviderActivitiesComponent,
    IdeaProviderProfileComponent,
    InvestorProfileComponent,
    InvestorActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
