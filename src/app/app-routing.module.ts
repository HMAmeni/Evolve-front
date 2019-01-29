import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { IdeaProviderRegistrationComponent } from './registration-management/idea-provider-registration/idea-provider-registration.component';
import { InvestorRegistrationComponent } from './registration-management/investor-registration/investor-registration.component';
import { FormerRegistrationComponent } from './registration-management/former-registration/former-registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login-management/login-component/login-component';
import { FormerActivitiesComponent } from './envirements/former-envirement/former-activities/former-activities.component';
import { InvestorActivitiesComponent } from './envirements/investor-envirement/investor-activities/investor-activities.component';
import { IdeaProviderActivitiesComponent } from './envirements/ideaProvider-envirement/idea-provider-activities/idea-provider-activities.component';
import { FormerProfileComponent } from './envirements/former-envirement/former-profile/former-profile.component';
 
 
const appRoutes: Routes = [
  { path: 'homeTest', component: FormerProfileComponent },
  { path: 'registration/former', component: FormerRegistrationComponent },
  { path: 'registration/ideaProvider',        component: IdeaProviderRegistrationComponent },
  { path: 'registration/investor',        component: InvestorRegistrationComponent },
  { path: 'evolve/login',        component: LoginComponent },
  { path: 'envirements', component: HomeComponentComponent,
    children: [ 
      { path: 'formerActivities/1', component: FormerActivitiesComponent},
      { path: 'investorActivities/1', component: InvestorActivitiesComponent},
      { path: 'ideaproviderActivities/1', component: IdeaProviderActivitiesComponent},

      //{ path: '',   redirectTo: '/heroes', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}