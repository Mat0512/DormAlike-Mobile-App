import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails31Page } from './house-details31.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails31Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails31PageRoutingModule {}
