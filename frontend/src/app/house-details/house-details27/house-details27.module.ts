import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails27PageRoutingModule } from './house-details27-routing.module';

import { HouseDetails27Page } from './house-details27.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails27PageRoutingModule
  ],
  declarations: [HouseDetails27Page]
})
export class HouseDetails27PageModule {}
