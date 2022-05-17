import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-funcionario',
  templateUrl: './consulta-funcionario.component.html',
  styleUrls: ['./consulta-funcionario.component.scss']
})
export class ConsultaFuncionarioComponent implements OnInit {

  constructor() { }

@Input() funcionarios;

  ngOnInit() {
  }

}
