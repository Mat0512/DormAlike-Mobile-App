import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails3Page } from './house-details3.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails3PageRoutingModule {}
