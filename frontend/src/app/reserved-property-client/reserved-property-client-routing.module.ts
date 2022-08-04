import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservedPropertyClientPage } from './reserved-property-client.page';

const routes: Routes = [
  {
    path: '',
    component: ReservedPropertyClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservedPropertyClientPageRoutingModule {}
