import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  constructor() { }

  nombreLower: string = 'victor';
  nombreUpper: string = 'VICTOR';
  nombreCompleto: string = 'vIctoR cOrsInO';

  fecha: Date = new Date();

  



}
