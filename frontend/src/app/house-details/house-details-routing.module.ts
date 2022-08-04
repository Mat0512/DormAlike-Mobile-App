import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetailsPage } from './house-details.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetailsPageRoutingModule {}
