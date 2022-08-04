import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationRequestOwnerPage } from './reservation-request-owner.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationRequestOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationRequestOwnerPageRoutingModule {}
