import { FormBuilder } from '@angular/forms';
import { Component,EventEmitter, Output, OnInit } from '@angular/core';
@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.scss']
})
export class CadastroEstoqueComponent implements OnInit {

@Output() dados = new EventEmitter();

  constructor( private fb: FormBuilder) { }

  form = this.fb.group({
    id: [null],
    descricao: [null],
    fornecedor: [null],
  });

  ngOnInit() {
  }


  enviar(){
    console.log(this.form.valid, this.form.value)
    if(this.form.valid){
      this.dados.emit(this.form.value);
    }else{
      alert('Formulário inválido')
    }
  }

}
