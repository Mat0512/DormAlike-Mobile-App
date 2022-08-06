import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails34Page } from './house-details34.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails34Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails34PageRoutingModule {}
