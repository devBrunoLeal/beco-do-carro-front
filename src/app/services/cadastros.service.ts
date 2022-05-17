import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CadastrosService {
  constructor(private http : HttpClient) {}

  cadastros = [
    {
      id: 1,
      name: "Cliente",
    },
    {
      id: 2,
      name: "Estoque",
    },
    {
      id: 3,
      name: "Veiculo",
    },
    {
      id: 4,
      name: "Ordem de serviço",
    },
    {
      id: 5,
      name: "Funcionário",
    },
  ];

  getCadastroInfo(id: number) {
   return this.cadastros.find(item => item.id == id)
  }

  getCadastros(){
    return this.cadastros;
  }


  postProduto(dados){
 const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',

            })
        };

    return this.http.post(environment.api+'estoque',dados,httpOptions)
  }

  postFuncionario(dados){
 const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',

            })
        };

    return this.http.post(environment.api+'funcionarios',dados,httpOptions)
  }


}
