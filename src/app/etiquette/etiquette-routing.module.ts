import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtiquettePage } from './etiquette.page';

const routes: Routes = [
  {
    path: '',
    component: EtiquettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtiquettePageRoutingModule {}
