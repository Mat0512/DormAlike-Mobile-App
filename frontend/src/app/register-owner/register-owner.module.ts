import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterOwnerPageRoutingModule } from './register-owner-routing.module';

import { RegisterOwnerPage } from './register-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterOwnerPageRoutingModule
  ],
  declarations: [RegisterOwnerPage]
})
export class RegisterOwnerPageModule {}
