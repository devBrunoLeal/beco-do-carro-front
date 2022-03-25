import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultasService } from '../services/consultas.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  titulo: string;
  page: any;

 constructor(private router: ActivatedRoute, private consultasService: ConsultasService) { }

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.page = this.consultasService.getConsultasInfo(res.id)
    })
  }

}
