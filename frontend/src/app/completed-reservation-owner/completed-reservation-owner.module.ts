import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedReservationOwnerPageRoutingModule } from './completed-reservation-owner-routing.module';

import { CompletedReservationOwnerPage } from './completed-reservation-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedReservationOwnerPageRoutingModule
  ],
  declarations: [CompletedReservationOwnerPage]
})
export class CompletedReservationOwnerPageModule {}
