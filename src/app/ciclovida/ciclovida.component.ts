import { Component, OnInit, OnChanges, Input, DoCheck, ViewChild, AfterViewInit, } from '@angular/core';

@Component({
  selector: 'app-ciclovida',
  templateUrl: './ciclovida.component.html',
  styleUrls: ['./ciclovida.component.css']
})
export class CiclovidaComponent implements OnInit, OnChanges, DoCheck, AfterViewInit {

  @Input('mensaje') mensaje: any;
  @ViewChild('elemento', {static: false}) elemento: any;

  constructor() { 
    console.log('Ejec. constructor'); // Inyección de importaciones
  }                                   // globales


  ngOnChanges() {
    console.log('Ejec. OnChanges') // Cada vez Entrada de valor
  }                               // en componente

  ngOnInit() {
    console.log('Ejec. OnInit') // Se ejecuta una sola vez
                                // tras el renderizado
    setTimeout(()=>{
      this.mensaje = "Cambio de valor";
    },5000)
  } 
  
  ngDoCheck() {
    console.log('Ejec. de DoCheck'); // Se ejecuta con cualquier
  }                                 // cambio de valor

  ngAfterViewInit() {
    console.log('Ejec. AfterViewInit'); // Se ejecuta tras la carga
    console.log(this.elemento);         // vistas hijas (elementos HTML)
  }
}
