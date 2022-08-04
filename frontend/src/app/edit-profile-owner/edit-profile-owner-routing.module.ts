import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfileOwnerPage } from './edit-profile-owner.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfileOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfileOwnerPageRoutingModule {}
