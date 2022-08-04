import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyPolicyNAPage } from './privacy-policy-na.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicyNAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyPolicyNAPageRoutingModule {}
