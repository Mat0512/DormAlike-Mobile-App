import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoutOwnerPageRoutingModule } from './logout-owner-routing.module';

import { LogoutOwnerPage } from './logout-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoutOwnerPageRoutingModule
  ],
  declarations: [LogoutOwnerPage]
})
export class LogoutOwnerPageModule {}
