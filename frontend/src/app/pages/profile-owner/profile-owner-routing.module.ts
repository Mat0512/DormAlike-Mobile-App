import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileOwnerPage } from './profile-owner.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileOwnerPageRoutingModule {}
