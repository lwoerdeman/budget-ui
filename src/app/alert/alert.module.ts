import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { ClrAlertModule } from "@clr/angular";



@NgModule({
  declarations: [AlertComponent],
  exports: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    ClrAlertModule
  ]
})
export class AlertModule { }
