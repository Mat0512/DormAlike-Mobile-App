import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNA7Page } from './house-na7.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNA7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNA7PageRoutingModule {}
