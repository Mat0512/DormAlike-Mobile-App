import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedReservationOwnerPage } from './completed-reservation-owner.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedReservationOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedReservationOwnerPageRoutingModule {}
