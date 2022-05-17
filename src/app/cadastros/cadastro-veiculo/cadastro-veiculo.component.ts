import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.scss']
})
export class CadastroVeiculoComponent implements OnInit {

 @Output() dados = new EventEmitter();

   constructor( private fb: FormBuilder, private _service: NotificationsService) { }

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'renavam',
      type: 'input',
      templateOptions: {
        label: 'Renavam',
        maxLength: 11,
        placeholder: '04864326532',
      }
    },
    {
      key: 'placa',
      type: 'input',
      templateOptions: {
        label: 'Placa',
        placeholder: 'HHH2222',
        maxLength:7,
        required: true,
      }
    },
    {
      key: 'marca',
      type: 'input',
      templateOptions: {
        label: 'Marca',
        mask: '',
        placeholder: 'Chevrolet',
        required: true,
      }
    },
    {
      key: 'modelo',
      type: 'input',
      templateOptions: {
        label: 'Modelo',
        mask: '',
        placeholder: 'Astra',
        required: true,
      }
    },
    {
      key: 'ano',
      type: 'input',
      templateOptions: {
        label: 'Ano',
        type: 'number',
        min: 1900,
        max: 2099,
        step: 1,
        placeholder: '0',
        required: true,
      }
    },
  ];

  ngOnInit() {
  }


getRandomArbitrary(min = 1000, max= 9999) {
  return Math.trunc(Math.random() * (max - min) + min);
}

  enviar(){
    if(this.form.valid){
      this.dados.emit(this.form.value);
    }else{
       this._service.error('Erro!', 'Formulário inválido',{timeOut: 3000})
    }
  }

}

