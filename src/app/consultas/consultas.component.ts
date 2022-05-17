import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-consultas",
  templateUrl: "./consultas.component.html",
  styleUrls: ["./consultas.component.scss"],
})
export class ConsultasComponent implements OnInit {
  titulo: string;
  page: any;
  funcionarios: Object;
  estoque: Object;
  clientes: Object;
  veiculos: Object;
  os: Object;

  constructor(private router: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.router.params.subscribe((res) => {
      this.page = this.apiService.getMenuInfo(res.id);
      this.apiService.get(this.page.api).subscribe((response) => {
        if (res.id == 1) this.clientes = response;
        if (res.id == 2) this.estoque = response;
        if (res.id == 3) this.veiculos = response;
        if (res.id == 4) this.os = response;
        if (res.id == 5) this.funcionarios = response;
      });
    });
  }
}
