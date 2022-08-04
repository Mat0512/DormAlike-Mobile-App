import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetStartedPage } from './get-started.page';

const routes: Routes = [
  {
    path: '',
    component: GetStartedPage
  },
  {
    path: 'privacy-policy-na',
    loadChildren: () => import('./privacy-policy-na/privacy-policy-na.module').then( m => m.PrivacyPolicyNAPageModule)
  },
  {
    path: 'terms-and-conditions-na',
    loadChildren: () => import('./terms-and-conditions-na/terms-and-conditions-na.module').then( m => m.TermsAndConditionsNAPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetStartedPageRoutingModule {}
