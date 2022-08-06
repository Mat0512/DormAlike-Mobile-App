import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails44Page } from './house-details44.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails44Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails44PageRoutingModule {}
