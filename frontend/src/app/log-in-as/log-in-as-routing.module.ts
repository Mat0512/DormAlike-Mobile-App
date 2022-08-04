import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInAsPage } from './log-in-as.page';

const routes: Routes = [
  {
    path: '',
    component: LogInAsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogInAsPageRoutingModule {}
