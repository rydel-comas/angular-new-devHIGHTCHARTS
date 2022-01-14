import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ChartsService} from "../core/services/charts.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import * as moment from "moment";
import {DataInterface} from "../../interface/data.interface";
import {AutoUnsubscribeComponent} from "../core/auto-unsubscribe.component";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent extends AutoUnsubscribeComponent implements OnInit {

  dataTable: DataInterface = {};
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };


  @Input() set indicator(indicator: string){
    console.log(indicator);
    const subsData = this.chartService.getData(indicator).subscribe(value => {
      this.dataTable=value;
      this.chartOptions={
        caption:{
          //TODO identificar signo
          text: '$' + this.dataTable.serie[0].valor,
          verticalAlign: "top",
          align: "center",
          style: {"fontSize" : "20px"}
        },
        title: {
          text: this.dataTable.nombre
        },
        subtitle: {text:'en ' + this.dataTable.unidad_medida + ' al ' + moment(this.dataTable.serie[0].fecha).format('DD/MM/YYYY') },
        xAxis: {
          title: {
            text: 'Fecha'
          },
          categories: [moment(this.dataTable.serie[0].fecha).format('DD/MM/YYYY'),moment(this.dataTable.serie[3].fecha).format('DD/MM/YYYY'),moment(this.dataTable.serie[6].fecha).format('DD/MM/YYYY')]
        },
        yAxis: {
          title: {
            text: 'Valor en ' +this.dataTable.unidad_medida
          }
        },
        series: [{
          name: this.dataTable.codigo,
          data: [this.dataTable.serie[0].valor, this.dataTable.serie[3].valor, this.dataTable.serie[6].valor],
          type: 'line'
        }]
      }
    })
    this.subscriptions.push(subsData);
  }

  public modalRef: BsModalRef | undefined;

  constructor(private chartService: ChartsService, private modalService: BsModalService) {
    super();
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
}
