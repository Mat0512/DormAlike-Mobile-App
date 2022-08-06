import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails31PageRoutingModule } from './house-details31-routing.module';

import { HouseDetails31Page } from './house-details31.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails31PageRoutingModule
  ],
  declarations: [HouseDetails31Page]
})
export class HouseDetails31PageModule {}
