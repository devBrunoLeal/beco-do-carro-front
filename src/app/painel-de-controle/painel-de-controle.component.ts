import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-painel-de-controle",
  templateUrl: "./painel-de-controle.component.html",
  styleUrls: ["./painel-de-controle.component.scss"],
})
export class PainelDeControleComponent implements OnInit {
  menu: { id: number; api: string; name: string; }[];
  constructor(
    private router: Router,
    private apiService: ApiService,
  ) {}

  ngOnInit() {
  this.menu = this.apiService.getMenu();
}

  redirectConsulta(item) {
    this.router.navigateByUrl("consultas/" + item);
  }

  redirectCadastro(item) {
    this.router.navigateByUrl("cadastros/" + item);
  }
}
