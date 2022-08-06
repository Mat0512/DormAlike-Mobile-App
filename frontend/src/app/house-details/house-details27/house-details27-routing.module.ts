import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails27Page } from './house-details27.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails27Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails27PageRoutingModule {}
