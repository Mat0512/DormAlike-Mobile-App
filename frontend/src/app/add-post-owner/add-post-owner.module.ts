import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPostOwnerPageRoutingModule } from './add-post-owner-routing.module';

import { AddPostOwnerPage } from './add-post-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPostOwnerPageRoutingModule
  ],
  declarations: [AddPostOwnerPage]
})
export class AddPostOwnerPageModule {}
