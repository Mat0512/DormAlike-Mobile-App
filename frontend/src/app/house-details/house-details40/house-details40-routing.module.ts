import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails40Page } from './house-details40.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails40Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails40PageRoutingModule {}
