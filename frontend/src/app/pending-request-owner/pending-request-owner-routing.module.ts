import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingRequestOwnerPage } from './pending-request-owner.page';

const routes: Routes = [
  {
    path: '',
    component: PendingRequestOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingRequestOwnerPageRoutingModule {}
