import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails33Page } from './house-details33.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails33PageRoutingModule {}
