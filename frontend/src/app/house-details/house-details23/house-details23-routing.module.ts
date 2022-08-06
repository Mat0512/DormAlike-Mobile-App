import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails23Page } from './house-details23.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails23PageRoutingModule {}
