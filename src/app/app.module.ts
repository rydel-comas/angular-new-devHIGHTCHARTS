import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppComponent } from './app.component';
import { ChartsComponent } from './module/charts/charts.component';
import {HttpClientModule} from "@angular/common/http";
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
