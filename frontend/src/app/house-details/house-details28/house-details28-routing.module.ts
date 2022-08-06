import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails28Page } from './house-details28.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails28Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails28PageRoutingModule {}
