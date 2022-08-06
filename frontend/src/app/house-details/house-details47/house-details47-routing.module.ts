import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails47Page } from './house-details47.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails47Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails47PageRoutingModule {}
