import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicationRoutingModule } from './aplication-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    AplicationRoutingModule
  ]
})
export class AplicationModule { }
