import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Sandra', 'Victor'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    this.nombre = 'Victor'
    this.genero = 'masculino'
  }

  borrarCliente() {
    // this.clientes = this.clientes.splice(1, 5)
    //Otra forma
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Victor',
    edad: 30,
    direccion: 'La Paz, Bolivia'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(2000); 

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);

  })

}
