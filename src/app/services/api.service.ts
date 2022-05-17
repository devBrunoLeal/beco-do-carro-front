import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http : HttpClient) { }

 menu = [
    {
      id: 1,
      api: 'clientes',
      name: "Cliente",
    },
    {
      id: 2,
      api: 'estoque',
      name: "Estoque",
    },
    {
      id: 3,
      api: 'veiculos',
      name: "Veiculo",
    },
    {
      id: 4,
      api: 'ordemservico',
      name: "Ordem de serviço",
    },
    {
      id: 5,
      api: 'funcionarios',
      name: "Funcionário",
    },
  ];


  getMenuInfo(id: number) {
   return this.menu.find(item => item.id == id)
  }

  getMenu(){
    return this.menu;
  }

  get(endpoint: string){
    const httpOptions = this.getHttp();
    return this.http.get(environment.api+endpoint,httpOptions)
  }

  getById(endpoint: string, id: any){
    const httpOptions = this.getHttp();
    return this.http.get(environment.api+endpoint+"/"+id,httpOptions)
  }

  post(endpoint: string, body: any){
    const httpOptions = this.getHttp();
    return this.http.post(environment.api+endpoint,body,httpOptions)
  }

  delete(endpoint: string, id: any){
    const httpOptions = this.getHttp();
    return this.http.delete(environment.api+endpoint+"/"+id,httpOptions)
  }

  update(endpoint: string,body: any){
    const httpOptions = this.getHttp();
    return this.http.put(environment.api+endpoint,body,httpOptions)
  }


  getHttp(){
    let http = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',

            })
        };
    return http;
  }

  login(dados){
       const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',

            })
        };

    return this.http.post(environment.api+'login',dados,httpOptions)
  }

}
