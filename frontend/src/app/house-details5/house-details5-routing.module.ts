import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails5Page } from './house-details5.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails5PageRoutingModule {}
