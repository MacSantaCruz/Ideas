import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { NbButtonModule, NbIconModule, NbLayoutModule, NbSelectModule } from '@nebular/theme';
import { FormComponent } from './form/form/form.component';


@NgModule({
  declarations: [DataComponent, FormComponent],
  imports: [
    CommonModule,
    DataRoutingModule,
    NbSelectModule,
    NbButtonModule,
    NbIconModule,
    NbLayoutModule
  ]
})
export class DataModule { }
