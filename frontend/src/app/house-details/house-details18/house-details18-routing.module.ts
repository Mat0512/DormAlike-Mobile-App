import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails18Page } from './house-details18.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails18PageRoutingModule {}
