import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss']
})
export class CadastroFuncionarioComponent implements OnInit {

  constructor( private fb: FormBuilder) { }
@Output() dados = new EventEmitter();

 form = this.fb.group({
    nome: [null],
    CPF: [null],
    telefone: [null],
    cod_funcionario: [null],
    ind_gerente: [null],
  });
  ngOnInit() {
  }

  enviar(){
    console.log(this.form.valid)
    if(this.form.valid){
      this.dados.emit(this.form.value);
    }else{
      alert('Formulário inválido')
    }
  }

}
