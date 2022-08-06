import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails25Page } from './house-details25.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails25PageRoutingModule {}
