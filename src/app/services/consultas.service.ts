import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

constructor() { }

 consultas = [
    {
      id: 1,
      name: "Ordem de Serviço",
    },
    {
      id: 2,
      name: "Estoque",
    },
  ];

  getConsultasInfo(id: number) {
   return this.consultas.find(item => item.id == id)
  }

  getConsultas(){
    return this.consultas;
  }

}
