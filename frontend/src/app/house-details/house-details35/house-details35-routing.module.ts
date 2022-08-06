import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails35Page } from './house-details35.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails35Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails35PageRoutingModule {}
