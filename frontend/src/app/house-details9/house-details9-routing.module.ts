import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails9Page } from './house-details9.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails9PageRoutingModule {}
