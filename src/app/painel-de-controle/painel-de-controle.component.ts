import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CadastrosService } from "../services/cadastros.service";
import { ConsultasService } from "../services/consultas.service";

@Component({
  selector: "app-painel-de-controle",
  templateUrl: "./painel-de-controle.component.html",
  styleUrls: ["./painel-de-controle.component.scss"],
})
export class PainelDeControleComponent implements OnInit {
  cadastros: { id: number; name: string; }[];
  consultas: { id: number; name: string; }[];
  constructor(
    private router: Router,
    private consultasService: ConsultasService,
    private cadastrosService: CadastrosService
  ) {}

  ngOnInit() {
  this.cadastros = this.cadastrosService.getCadastros();
  this.consultas = this.consultasService.getConsultas();
}

  redirectConsulta(item) {
    this.router.navigateByUrl("consultas/" + item);
  }

  redirectCadastro(item) {
    this.router.navigateByUrl("cadastros/" + item);
  }
}
