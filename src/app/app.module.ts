import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SidebarComponent } from './structure/sidebar/sidebar.component';
import { NavbarComponent } from './structure/navbar/navbar.component';
import { FooterbarComponent } from './structure/footerbar/footerbar.component';

import { IdeaProviderRegistrationComponent } from './registration-management/idea-provider-registration/idea-provider-registration.component';
import { FormerRegistrationComponent } from './registration-management/former-registration/former-registration.component';
import { InvestorRegistrationComponent } from './registration-management/investor-registration/investor-registration.component';

import { IdeaProviderLoginComponent } from './login-management/idea-provider-login/idea-provider-login.component';
import { InvestorLoginComponent } from './login-management/investor-login/investor-login.component';
import { FormerLoginComponent } from './login-management/former-login/former-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterbarComponent,
    IdeaProviderRegistrationComponent,
    IdeaProviderLoginComponent,
    InvestorLoginComponent,
    FormerLoginComponent,
    FormerRegistrationComponent,
    InvestorRegistrationComponent,
    PageNotFoundComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
