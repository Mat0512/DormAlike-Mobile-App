import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingRequestOwnerPageRoutingModule } from './pending-request-owner-routing.module';

import { PendingRequestOwnerPage } from './pending-request-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingRequestOwnerPageRoutingModule
  ],
  declarations: [PendingRequestOwnerPage]
})
export class PendingRequestOwnerPageModule {}
