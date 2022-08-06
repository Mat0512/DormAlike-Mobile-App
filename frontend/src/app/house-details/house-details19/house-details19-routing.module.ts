import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails19Page } from './house-details19.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails19PageRoutingModule {}
