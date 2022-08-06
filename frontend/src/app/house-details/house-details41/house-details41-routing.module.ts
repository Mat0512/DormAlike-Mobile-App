import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails41Page } from './house-details41.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails41Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails41PageRoutingModule {}
