import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails49Page } from './house-details49.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails49Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails49PageRoutingModule {}
