import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails17Page } from './house-details17.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails17PageRoutingModule {}
