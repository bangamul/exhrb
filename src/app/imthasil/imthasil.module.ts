import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImthasilPageRoutingModule } from './imthasil-routing.module';

import { ImthasilPage } from './imthasil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImthasilPageRoutingModule
  ],
  declarations: [ImthasilPage]
})
export class ImthasilPageModule {}
