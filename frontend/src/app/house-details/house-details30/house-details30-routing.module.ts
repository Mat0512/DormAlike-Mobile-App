import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails30Page } from './house-details30.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails30Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails30PageRoutingModule {}
