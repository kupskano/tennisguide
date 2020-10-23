import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RacquetPageRoutingModule } from './racquet-routing.module';

import { RacquetPage } from './racquet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RacquetPageRoutingModule
  ],
  declarations: [RacquetPage]
})
export class RacquetPageModule {}
