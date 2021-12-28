import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  title: string = "Consumo de api rest"
  nombre: string = "Carlos Ivan Soto Pérez"
  contacto: string = "gameue@hotmail.com"
  telefono: string = "8714650616"
  fecha: string = "28 de diciembre del 2021"

  constructor() { }

  ngOnInit(): void {
  }

}
