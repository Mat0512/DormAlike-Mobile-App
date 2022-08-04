import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogInAsPageRoutingModule } from './log-in-as-routing.module';

import { LogInAsPage } from './log-in-as.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogInAsPageRoutingModule
  ],
  declarations: [LogInAsPage]
})
export class LogInAsPageModule {}
