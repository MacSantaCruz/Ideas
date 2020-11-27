import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { NbAccordionModule } from '@nebular/theme';


@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    NbAccordionModule
  ]
})
export class InfoModule { }
