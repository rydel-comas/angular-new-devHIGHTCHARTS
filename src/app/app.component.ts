import {Component, HostListener} from '@angular/core';
import {WEBKIT_TABLET_BREAKPOINT} from "./properties/app-properties";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  indicators= ['uf', 'ivp', 'dolar', 'dolar_intercambio', 'euro', 'ipc', 'utm', 'imacec', 'tpm', 'libra_cobre', 'tasa_desempleo', 'bitcoin'];
  title = 'miningTag';
  isSmallScreenResolution: boolean | undefined;

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isSmallScreenResolution = window.innerWidth <= WEBKIT_TABLET_BREAKPOINT;
    console.log(this.isSmallScreenResolution);
  }
}
