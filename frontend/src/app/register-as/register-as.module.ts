import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterAsPageRoutingModule } from './register-as-routing.module';

import { RegisterAsPage } from './register-as.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterAsPageRoutingModule
  ],
  declarations: [RegisterAsPage]
})
export class RegisterAsPageModule {}
