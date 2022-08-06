import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails11Page } from './house-details11.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails11PageRoutingModule {}
