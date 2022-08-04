import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNA1Page } from './house-na1.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNA1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNA1PageRoutingModule {}
