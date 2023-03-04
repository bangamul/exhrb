import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatadirisPageRoutingModule } from './datadiris-routing.module';

import { DatadirisPage } from './datadiris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatadirisPageRoutingModule
  ],
  declarations: [DatadirisPage]
})
export class DatadirisPageModule {}
