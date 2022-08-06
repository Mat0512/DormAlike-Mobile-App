import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails8Page } from './house-details8.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails8PageRoutingModule {}
