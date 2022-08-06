import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails22Page } from './house-details22.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails22PageRoutingModule {}
