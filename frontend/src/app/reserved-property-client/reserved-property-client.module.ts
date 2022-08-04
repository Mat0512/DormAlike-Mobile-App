import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservedPropertyClientPageRoutingModule } from './reserved-property-client-routing.module';

import { ReservedPropertyClientPage } from './reserved-property-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservedPropertyClientPageRoutingModule
  ],
  declarations: [ReservedPropertyClientPage]
})
export class ReservedPropertyClientPageModule {}
