import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetails50Page } from './house-details50.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetails50Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetails50PageRoutingModule {}
