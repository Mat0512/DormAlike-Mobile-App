import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfileClientPage } from './edit-profile-client.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfileClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfileClientPageRoutingModule {}
