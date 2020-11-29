import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { NbButtonModule, NbIconModule, NbLayoutModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { FormComponent } from './form/form/form.component';
import { InsertFormComponent } from 'src/app/shared/insert-form/insert-form.component';


@NgModule({
  declarations: [DataComponent, FormComponent,InsertFormComponent],
  imports: [
    FormsModule,
    CommonModule,
    DataRoutingModule,
    NbSelectModule,
    NbButtonModule,
    NbIconModule,
    NbLayoutModule,
    NbWindowModule.forChild()
  ]
})
export class DataModule { }
