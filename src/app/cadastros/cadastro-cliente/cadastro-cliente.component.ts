import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {


@Output() dados = new EventEmitter();

  constructor( private fb: FormBuilder, private _service: NotificationsService) { }

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'nome',
      type: 'input',
      templateOptions: {
        label: 'Nome',
        placeholder: 'Ex: Bruno',
        required: true,
      }
    },
    {
      key: 'CPF',
      type: 'input',
      templateOptions: {
        label: 'CPF',
        mask: '000.000.000-00',
        placeholder: '000.000.000-00',
        required: true,
      }
    },
    {
      key: 'telefone',
      type: 'input',
      templateOptions: {
        label: 'Telefone',
        mask: '(00) 00000-0000',
        placeholder: '(00) 00000-0000',
        required: true,
      }
    }
  ];

  ngOnInit() {
  }


  enviar(){
    console.log(this.form.valid, this.form.value)
    if(this.form.valid){
      this.dados.emit(this.form.value);
    }else{
       this._service.error('Erro!', 'Formulário inválido',{timeOut: 3000})
    }
  }

}
