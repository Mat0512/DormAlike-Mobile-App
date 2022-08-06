import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails43Page } from './house-details43.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails43Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails43PageRoutingModule {}
