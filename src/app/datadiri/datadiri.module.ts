import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatadiriPageRoutingModule } from './datadiri-routing.module';

import { DatadiriPage } from './datadiri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatadiriPageRoutingModule
  ],
  declarations: [DatadiriPage]
})
export class DatadiriPageModule {}
