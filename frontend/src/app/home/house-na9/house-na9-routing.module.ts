import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNA9Page } from './house-na9.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNA9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNA9PageRoutingModule {}
