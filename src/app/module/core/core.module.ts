import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutoUnsubscribeComponent} from "./auto-unsubscribe.component";



@NgModule({
  declarations: [AutoUnsubscribeComponent],
  imports: [
    CommonModule,
  ],
  exports:[AutoUnsubscribeComponent]
})
export class CoreModule { }
