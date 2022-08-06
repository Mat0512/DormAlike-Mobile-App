import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails4Page } from './house-details4.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails4PageRoutingModule {}
