import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNA5PageRoutingModule } from './house-na5-routing.module';

import { HouseNA5Page } from './house-na5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNA5PageRoutingModule
  ],
  declarations: [HouseNA5Page]
})
export class HouseNA5PageModule {}
