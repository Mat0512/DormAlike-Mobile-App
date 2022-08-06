import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails21Page } from './house-details21.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails21PageRoutingModule {}
