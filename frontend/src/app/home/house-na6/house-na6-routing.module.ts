import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNA6Page } from './house-na6.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNA6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNA6PageRoutingModule {}
