import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseNA5Page } from './house-na5.page';

const routes: Routes = [
  {
    path: '',
    component: HouseNA5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseNA5PageRoutingModule {}
