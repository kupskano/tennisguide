import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtiquettePageRoutingModule } from './etiquette-routing.module';

import { EtiquettePage } from './etiquette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtiquettePageRoutingModule
  ],
  declarations: [EtiquettePage]
})
export class EtiquettePageModule {}
