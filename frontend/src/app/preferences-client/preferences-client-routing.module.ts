import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferencesClientPage } from './preferences-client.page';

const routes: Routes = [
  {
    path: '',
    component: PreferencesClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferencesClientPageRoutingModule {}
