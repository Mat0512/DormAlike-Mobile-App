import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails37Page } from './house-details37.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails37Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails37PageRoutingModule {}
