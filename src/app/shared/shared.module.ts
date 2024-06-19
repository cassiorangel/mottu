import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgErrorComponent } from './msg-error/msg-error.component';



@NgModule({
  declarations: [
    MsgErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MsgErrorComponent
  ]
})
export class SharedModule { }
