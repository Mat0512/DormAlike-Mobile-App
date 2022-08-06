import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails48Page } from './house-details48.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails48Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails48PageRoutingModule {}
