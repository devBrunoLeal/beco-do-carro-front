import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-estoque',
  templateUrl: './consulta-estoque.component.html',
  styleUrls: ['./consulta-estoque.component.scss']
})
export class ConsultaEstoqueComponent implements OnInit {

  constructor() { }

@Input() estoque;

  ngOnInit() {
  }

}
