import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatadirissPageRoutingModule } from './datadiriss-routing.module';

import { DatadirissPage } from './datadiriss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatadirissPageRoutingModule
  ],
  declarations: [DatadirissPage]
})
export class DatadirissPageModule {}
