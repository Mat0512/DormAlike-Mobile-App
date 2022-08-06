import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails38PageRoutingModule } from './house-details38-routing.module';

import { HouseDetails38Page } from './house-details38.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails38PageRoutingModule
  ],
  declarations: [HouseDetails38Page]
})
export class HouseDetails38PageModule {}
