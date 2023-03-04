import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImthasilPage } from './imthasil.page';

const routes: Routes = [
  {
    path: '',
    component: ImthasilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImthasilPageRoutingModule {}
