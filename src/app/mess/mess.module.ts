import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessPageRoutingModule } from './mess-routing.module';

import { MessPage } from './mess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessPageRoutingModule
  ],
  declarations: [MessPage]
})
export class MessPageModule {}
