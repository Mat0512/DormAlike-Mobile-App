import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails6Page } from './house-details6.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails6PageRoutingModule {}
