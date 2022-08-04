import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterAsPage } from './register-as.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterAsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterAsPageRoutingModule {}
