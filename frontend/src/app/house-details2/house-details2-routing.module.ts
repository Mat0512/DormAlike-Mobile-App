import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails2Page } from './house-details2.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails2PageRoutingModule {}
