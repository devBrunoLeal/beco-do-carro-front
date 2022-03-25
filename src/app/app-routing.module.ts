import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PainelDeControleComponent } from "./painel-de-controle/painel-de-controle.component";
import { CadastrosComponent } from "./cadastros/cadastros.component";
import { ConsultasComponent } from "./consultas/consultas.component";



const routes: Routes = [
  {
    pathMatch: "full",
    path: '',
    redirectTo: "login",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "painel-de-controle",
    component: PainelDeControleComponent,
  },
    {
    path: "cadastros/:id",
    component: CadastrosComponent,
  },
  {
    path: "consultas/:id",
    component: ConsultasComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
