import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails20Page } from './house-details20.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails20PageRoutingModule {}
