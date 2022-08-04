import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails1Page } from './house-details1.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails1PageRoutingModule {}
