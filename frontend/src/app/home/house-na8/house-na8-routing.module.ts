import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNA8Page } from './house-na8.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNA8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNA8PageRoutingModule {}
