import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails32Page } from './house-details32.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails32PageRoutingModule {}
