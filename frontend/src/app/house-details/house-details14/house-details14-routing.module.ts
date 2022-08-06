import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails14Page } from './house-details14.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails14PageRoutingModule {}
