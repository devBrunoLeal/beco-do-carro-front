import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss']
})
export class CadastrosComponent implements OnInit {
  page: { id: number; name: string; api: any };
  id: any;

  constructor( private _service: NotificationsService,private fb: FormBuilder,private router: ActivatedRoute, private apiService: ApiService) { }


  ngOnInit() {
    this.router.params.subscribe(res => {
      this.page = this.apiService.getMenuInfo(res.id)
      this.id = res.id;
    })
  }

  enviar(body){
    this.apiService.post(this.page.api, body).subscribe(res => {
    },res => {
      if(res.status == 200){
       this._service.success('Sucesso!', 'Cadastrado com sucesso.',{timeOut: 3000})
      }else{
       this._service.error('Erro!', 'Falha ao cadastrar',{timeOut: 3000})
      }

      })
  }
}
