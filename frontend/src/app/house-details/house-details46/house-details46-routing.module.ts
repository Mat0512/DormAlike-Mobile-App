import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails46Page } from './house-details46.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails46Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails46PageRoutingModule {}
