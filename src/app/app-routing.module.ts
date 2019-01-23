import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { IdeaProviderRegistrationComponent } from './registration-management/idea-provider-registration/idea-provider-registration.component';
import { InvestorRegistrationComponent } from './registration-management/investor-registration/investor-registration.component';
import { FormerRegistrationComponent } from './registration-management/former-registration/former-registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponentComponent } from './home-component/home-component.component';
 
 
const appRoutes: Routes = [
 
  { path: 'home', component: HomeComponentComponent,
    children: [ 
      { path: 'registration/former', component: FormerRegistrationComponent },
      { path: 'registration/ideaProvider',        component: IdeaProviderRegistrationComponent },
      { path: 'registration/investor',        component: InvestorRegistrationComponent },
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