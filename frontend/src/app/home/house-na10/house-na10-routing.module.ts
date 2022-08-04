import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNA10Page } from './house-na10.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNA10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNA10PageRoutingModule {}
