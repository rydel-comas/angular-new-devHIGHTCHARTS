import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../../environments/environment";
import {DataInterface} from "../../../interface/data.interface";


@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  constructor(private readonly http: HttpClient) {}

  public getData(indicator:string): Observable<DataInterface> {
    return this.http.get<DataInterface>(`${environment.base_endpoint}/api/${indicator}`
    );
  }
}
