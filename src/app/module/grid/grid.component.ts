import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input('dataFromParent') public modalRef: BsModalRef | undefined;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

}
