import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppComponent } from './app.component';
import { ChartsComponent } from './module/charts/charts.component';
import {HttpClientModule} from "@angular/common/http";
import { GridComponent } from './module/grid/grid.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import {AutoUnsubscribeComponent} from "./module/core/auto-unsubscribe.component";

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    GridComponent,
    AutoUnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
