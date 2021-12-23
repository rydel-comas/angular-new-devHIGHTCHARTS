import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ChartsService} from "../services/charts.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  _dataTable: any;

  @Input('dataFromParent') public modalRef: BsModalRef | undefined;

  @Input() set dataTable(dataTable: any){
    console.log(dataTable);
    this._dataTable=dataTable;
  }
  constructor(private modalService: BsModalService, private chartService: ChartsService) { }

  ngOnInit(): void {

  }

}
