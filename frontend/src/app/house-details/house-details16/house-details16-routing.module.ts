import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails16Page } from './house-details16.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails16PageRoutingModule {}
