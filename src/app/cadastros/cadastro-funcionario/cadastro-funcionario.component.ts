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
    cod_funcionario: [this.getRandomArbitrary()],
    ind_gerente: [null],
  });
  ngOnInit() {
  }

getRandomArbitrary(min = 1000, max= 9999) {
  return Math.trunc(Math.random() * (max - min) + min);
}

  enviar(){
    console.log(this.form.valid)
    if(this.form.valid){
      this.form.value.cod_funcionario = this.getRandomArbitrary();
      this.dados.emit(this.form.value);
    }else{
      alert('Formulário inválido')
    }
  }

}
