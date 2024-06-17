import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicationRoutingModule } from './aplication-routing.module';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AplicationRoutingModule
  ]
})
export class AplicationModule { }
