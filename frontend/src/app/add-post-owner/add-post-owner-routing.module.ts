import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPostOwnerPage } from './add-post-owner.page';

const routes: Routes = [
  {
    path: '',
    component: AddPostOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPostOwnerPageRoutingModule {}
