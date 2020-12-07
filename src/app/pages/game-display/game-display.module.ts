import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameDisplayRoutingModule } from './game-display-routing.module';
import { GameDisplayComponent } from './game-display.component';
import { NbLayoutModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [GameDisplayComponent],
  imports: [
    CommonModule,
    GameDisplayRoutingModule,
    NbLayoutModule,
    FormsModule
  ]
})
export class GameDisplayModule { }
