import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails26Page } from './house-details26.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails26Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails26PageRoutingModule {}
