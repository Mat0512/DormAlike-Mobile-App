import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails7Page } from './house-details7.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails7PageRoutingModule {}
