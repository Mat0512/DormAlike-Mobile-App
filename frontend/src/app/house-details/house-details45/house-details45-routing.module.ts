import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails45Page } from './house-details45.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails45Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails45PageRoutingModule {}
