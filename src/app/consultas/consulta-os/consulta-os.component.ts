import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-os',
  templateUrl: './consulta-os.component.html',
  styleUrls: ['./consulta-os.component.scss']
})
export class ConsultaOsComponent implements OnInit {

@Input() os;
  constructor() { }

  ngOnInit() {
  }

}
