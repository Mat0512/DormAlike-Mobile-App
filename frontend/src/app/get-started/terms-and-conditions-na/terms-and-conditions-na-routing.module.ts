import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsAndConditionsNAPage } from './terms-and-conditions-na.page';

const routes: Routes = [
  {
    path: '',
    component: TermsAndConditionsNAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsAndConditionsNAPageRoutingModule {}
