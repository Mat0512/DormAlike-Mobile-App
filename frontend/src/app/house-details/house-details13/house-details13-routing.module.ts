import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails13Page } from './house-details13.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails13PageRoutingModule {}
