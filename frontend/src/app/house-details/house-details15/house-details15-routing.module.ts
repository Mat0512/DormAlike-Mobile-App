import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails15Page } from './house-details15.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails15PageRoutingModule {}
