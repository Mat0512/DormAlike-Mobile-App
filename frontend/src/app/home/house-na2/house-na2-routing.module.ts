import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNA2Page } from './house-na2.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNA2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNA2PageRoutingModule {}
