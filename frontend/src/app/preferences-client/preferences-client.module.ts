import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferencesClientPageRoutingModule } from './preferences-client-routing.module';

import { PreferencesClientPage } from './preferences-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferencesClientPageRoutingModule
  ],
  declarations: [PreferencesClientPage]
})
export class PreferencesClientPageModule {}
