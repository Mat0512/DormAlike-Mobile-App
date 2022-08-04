import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNA4Page } from './house-na4.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNA4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNA4PageRoutingModule {}
