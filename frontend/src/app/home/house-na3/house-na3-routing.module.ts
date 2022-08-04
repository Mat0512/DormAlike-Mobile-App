import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNA3Page } from './house-na3.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNA3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNA3PageRoutingModule {}
