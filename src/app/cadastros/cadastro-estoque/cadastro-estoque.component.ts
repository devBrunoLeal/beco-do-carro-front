import { FormBuilder, FormGroup } from '@angular/forms';
import { Component,EventEmitter, Output, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.scss']
})
export class CadastroEstoqueComponent implements OnInit {

@Output() dados = new EventEmitter();

   constructor( private fb: FormBuilder, private _service: NotificationsService) { }

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'id',
      type: 'input',
      className: 'd-none',
      defaultValue: this.getRandomArbitrary() ,
      templateOptions: {
        label: 'id',
        placeholder: '1',
      }
    },
    {
      key: 'descricao',
      type: 'input',
      templateOptions: {
        label: 'Descrição',
        placeholder: 'Item',
        required: true,
      }
    },
    {
      key: 'fornecedor',
      type: 'input',
      templateOptions: {
        label: 'Fornecedor',
        mask: '',
        placeholder: '',
        required: true,
      }
    },
    {
      key: 'quantidade',
      type: 'input',
      templateOptions: {
        label: 'Quantidade',
        type: 'number',
        placeholder: '0',
        required: true,
      }
    },
    {
      key: 'preco',
      type: 'input',
      templateOptions: {
        label: 'Preço',
        mask: '',
        type: 'number',
        placeholder: '',
        required: true,
      }
    }
  ];

  ngOnInit() {
  }


getRandomArbitrary(min = 1000, max= 9999) {
  return Math.trunc(Math.random() * (max - min) + min);
}

  enviar(){
    if(this.form.valid){
      this.form.value.id = this.getRandomArbitrary();
      this.dados.emit(this.form.value);
    }else{
       this._service.error('Erro!', 'Formulário inválido',{timeOut: 3000})
    }
  }

}
