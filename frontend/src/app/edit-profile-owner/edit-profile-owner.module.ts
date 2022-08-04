import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfileOwnerPageRoutingModule } from './edit-profile-owner-routing.module';

import { EditProfileOwnerPage } from './edit-profile-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfileOwnerPageRoutingModule
  ],
  declarations: [EditProfileOwnerPage]
})
export class EditProfileOwnerPageModule {}
