import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails36Page } from './house-details36.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails36Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails36PageRoutingModule {}
