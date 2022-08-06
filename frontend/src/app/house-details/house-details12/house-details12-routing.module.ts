import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails12Page } from './house-details12.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails12PageRoutingModule {}
