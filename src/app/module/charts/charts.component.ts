import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {ChartsService} from "../services/charts.service";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };
  constructor(private chartService: ChartsService) { }

  ngOnInit(): void {
    this.chartService.getData().subscribe(data=>{
      console.log(data);
    })
  }

}
