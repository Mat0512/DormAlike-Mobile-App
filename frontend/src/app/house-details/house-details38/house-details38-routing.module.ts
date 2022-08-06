import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails38Page } from './house-details38.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails38Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails38PageRoutingModule {}
