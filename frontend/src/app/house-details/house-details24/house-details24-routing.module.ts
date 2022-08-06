import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails24Page } from './house-details24.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails24PageRoutingModule {}
