import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails39Page } from './house-details39.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails39Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails39PageRoutingModule {}
