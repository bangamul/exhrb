import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KalkulatorkaloriPage } from './kalkulatorkalori.page';

const routes: Routes = [
  {
    path: '',
    component: KalkulatorkaloriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KalkulatorkaloriPageRoutingModule {}
