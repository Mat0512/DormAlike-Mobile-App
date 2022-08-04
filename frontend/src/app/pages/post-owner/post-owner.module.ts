import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostOwnerPageRoutingModule } from './post-owner-routing.module';

import { PostOwnerPage } from './post-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostOwnerPageRoutingModule
  ],
  declarations: [PostOwnerPage]
})
export class PostOwnerPageModule {}
