import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileOwnerPageRoutingModule } from './profile-owner-routing.module';

import { ProfileOwnerPage } from './profile-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileOwnerPageRoutingModule
  ],
  declarations: [ProfileOwnerPage]
})
export class ProfileOwnerPageModule {}
