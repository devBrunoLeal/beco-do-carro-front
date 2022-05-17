import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.scss']
})
export class ConsultaClienteComponent implements OnInit {

  constructor() { }

@Input() clientes;

  ngOnInit() {
  }

}
