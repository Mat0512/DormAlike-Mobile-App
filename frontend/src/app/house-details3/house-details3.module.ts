import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails3PageRoutingModule } from './house-details3-routing.module';

import { HouseDetails3Page } from './house-details3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails3PageRoutingModule
  ],
  declarations: [HouseDetails3Page]
})
export class HouseDetails3PageModule {}
