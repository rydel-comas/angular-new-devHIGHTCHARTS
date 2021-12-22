import {Component, OnInit, TemplateRef} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ChartsService} from "../services/charts.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

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

  public modalRef: BsModalRef | undefined;

  constructor(private chartService: ChartsService, private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.chartService.getData().subscribe(data=>{
      console.log(data);
    })
  }

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalTemplate,
      {
        class: 'modal-dialogue-centered modal-md',
        backdrop: 'static',
        keyboard: true
      }
    );
  }

}