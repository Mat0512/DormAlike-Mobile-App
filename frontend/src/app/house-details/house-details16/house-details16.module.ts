import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails16PageRoutingModule } from './house-details16-routing.module';

import { HouseDetails16Page } from './house-details16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails16PageRoutingModule
  ],
  declarations: [HouseDetails16Page]
})
export class HouseDetails16PageModule {}
