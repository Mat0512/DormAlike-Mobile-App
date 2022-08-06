import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails42Page } from './house-details42.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails42Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails42PageRoutingModule {}
