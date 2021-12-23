import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ChartsService} from "../services/charts.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import * as moment from "moment";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  dataTable: any;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };


  @Input() set indicator(indicator: string){
    console.log(indicator);
    this.chartService.getData(indicator).subscribe(value => {
      this.dataTable=value;
      this.chartOptions={
        title: {
          text: this.dataTable.nombre
        },
        subtitle: {text:'en ' + this.dataTable.unidad_medida + ' al ' + moment(this.dataTable.serie[0].fecha).format('DD/MM/YYYY') },
        xAxis: {
          title: {
            text: 'Fecha'
          },
          categories: [this.dataTable.serie[0].fecha, this.dataTable.serie[1].fecha, this.dataTable.serie[2].fecha]
        },
        yAxis: {
          title: {
            text: 'Valor en ' +this.dataTable.unidad_medida
          }
        },
        series: [{
          data: [this.dataTable.serie[0].valor, this.dataTable.serie[1].valor, this.dataTable.serie[2].valor],
          type: 'line'
        }]
      }
    })
  }

  public modalRef: BsModalRef | undefined;

  constructor(private chartService: ChartsService, private modalService: BsModalService) {
  }

  ngOnInit(): void {
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

  closeModal() {
    this.modalService.hide();
  }
}
