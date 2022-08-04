import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfileClientPageRoutingModule } from './edit-profile-client-routing.module';

import { EditProfileClientPage } from './edit-profile-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfileClientPageRoutingModule
  ],
  declarations: [EditProfileClientPage]
})
export class EditProfileClientPageModule {}
