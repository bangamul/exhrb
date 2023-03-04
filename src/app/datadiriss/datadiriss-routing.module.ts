import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatadirissPage } from './datadiriss.page';

const routes: Routes = [
  {
    path: '',
    component: DatadirissPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatadirissPageRoutingModule {}
