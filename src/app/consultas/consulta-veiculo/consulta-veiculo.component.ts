import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-veiculo',
  templateUrl: './consulta-veiculo.component.html',
  styleUrls: ['./consulta-veiculo.component.scss']
})
export class ConsultaVeiculoComponent implements OnInit {

  constructor() { }

@Input() veiculos;

  ngOnInit() {
  }

}
