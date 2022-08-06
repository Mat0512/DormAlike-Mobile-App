import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails29Page } from './house-details29.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails29Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails29PageRoutingModule {}
