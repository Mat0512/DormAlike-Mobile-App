import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoutOwnerPage } from './logout-owner.page';

const routes: Routes = [
  {
    path: '',
    component: LogoutOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoutOwnerPageRoutingModule {}
