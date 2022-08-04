import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationRequestOwnerPageRoutingModule } from './reservation-request-owner-routing.module';

import { ReservationRequestOwnerPage } from './reservation-request-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationRequestOwnerPageRoutingModule
  ],
  declarations: [ReservationRequestOwnerPage]
})
export class ReservationRequestOwnerPageModule {}
