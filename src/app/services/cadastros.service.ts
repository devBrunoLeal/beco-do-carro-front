import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CadastrosService {
  constructor() {}

  cadastros = [
    {
      id: 1,
      name: "Produto",
    },
    {
      id: 2,
      name: "Cliente",
    },
    {
      id: 3,
      name: "Ordem de Serviço",
    },
  ];

  getCadastroInfo(id: number) {
   return this.cadastros.find(item => item.id == id)
  }

  getCadastros(){
    return this.cadastros;
  }
}
