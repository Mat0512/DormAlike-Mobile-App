import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostOwnerPage } from './post-owner.page';

const routes: Routes = [
  {
    path: '',
    component: PostOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostOwnerPageRoutingModule {}
