import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeClientPageRoutingModule } from './home-client-routing.module';

import { HomeClientPage } from './home-client.page';

import { RouterModule } from '@angular/router';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeClientPageRoutingModule,
    RouterModule,
    Ng2SearchPipeModule,
  ],
  declarations: [HomeClientPage]
})
export class HomeClientPageModule {}
