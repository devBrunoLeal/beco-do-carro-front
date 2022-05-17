import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { NotificationsService } from "angular2-notifications";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-cadastro-os",
  templateUrl: "./cadastro-os.component.html",
  styleUrls: ["./cadastro-os.component.scss"],
})
export class CadastroOsComponent implements OnInit {
  @Output() dados = new EventEmitter();
  funcionarios: any;
  clientes: any;
  veiculos: any;

  constructor(
    private fb: FormBuilder,
    private _service: NotificationsService,
    private apiService: ApiService
  ) {}

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: "OS",
      type: "input",
      className: "d-none",
      defaultValue: this.getRandomArbitrary(),
      templateOptions: {
        label: "OS",
        placeholder: "1",
      },
    },
    {
      key: "cod_funcionario",
      type: "select",
      templateOptions: {
        type: "text",
        label: "Funcionário Responsável",
        options: [
          {
            label: "Teste",
            value: 0,
          },
        ],
      },
    },
  {
      key: "CPF",
      type: "select",
      templateOptions: {
        type: "text",
        label: "Cliente",
        options: [
          {
            label: "Teste",
            value: 0,
          },
        ],
      },
    },
    {
      key: "renavam",
      type: "select",
      templateOptions: {
        type: "text",
        label: "Veículo",
        options: [
          {
            label: "Teste",
            value: 0,
          },
        ],
      },
    },
    {
      key: "data_inicio",
      type: "input",
      templateOptions: {
        label: "Data início",
        type: 'date',
        mask: "",
        placeholder: "",
        required: true,
      },
    },
    {
      key: "data_fim",
      type: "input",
      templateOptions: {
        label: "Data fim",
        type: 'date',
        mask: "",
        placeholder: "",
        required: true,
      },
    },
    {
      key: "preco",
      type: "input",
      templateOptions: {
        label: "Preço",
        mask: "",
        type: "number",
        placeholder: "",
        required: true,
      },
    },
  ];

  ngOnInit() {
    this.apiService.get("funcionarios").subscribe((res) => {
      this.funcionarios = res;
      this.inserirDadosSelect();
    });
    this.apiService.get("clientes").subscribe((res) => {
      this.clientes = res;
      this.inserirDadosSelect();
    });
    this.apiService.get("veiculos").subscribe((res) => {
      this.veiculos = res;
      this.inserirDadosSelect();
    });
  }

  inserirDadosSelect() {
    if (this.veiculos && this.clientes && this.funcionarios) {
        let positionFuncionario = this.fields.findIndex(item => item.key == "cod_funcionario")
        let positionCliente = this.fields.findIndex(item => item.key == "CPF")
        let positionVeiculo = this.fields.findIndex(item => item.key == "renavam")

        let itensFuncionario = this.funcionarios.map(element =>{return {label: element.nome, value: element.cod_funcionario}});
        let itensCliente = this.clientes.map(element =>{return {label: element.nome, value: element.CPF}});
        let itensVeiculo = this.veiculos.map(element =>{return {label: element.placa+' '+element.modelo, value: element.renavam}});


        this.fields[positionFuncionario].templateOptions.options = itensFuncionario;
        this.fields[positionCliente].templateOptions.options = itensCliente;
        this.fields[positionVeiculo].templateOptions.options = itensVeiculo;
    }
  }

  getRandomArbitrary(min = 100000, max = 999999) {
    return Math.trunc(Math.random() * (max - min) + min);
  }

  enviar() {
    if (this.form.valid) {
      this.form.value.OS = this.getRandomArbitrary();
      this.dados.emit(this.form.value);
    } else {
      this._service.error("Erro!", "Formulário inválido", { timeOut: 3000 });
    }
  }
}
