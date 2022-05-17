import { CadastroVeiculoComponent } from "./cadastros/cadastro-veiculo/cadastro-veiculo.component";
import { CadastroClienteComponent } from "./cadastros/cadastro-cliente/cadastro-cliente.component";
import { ConsultaVeiculoComponent } from "./consultas/consulta-veiculo/consulta-veiculo.component";
import { ConsultaClienteComponent } from "./consultas/consulta-cliente/consulta-cliente.component";
import { ConsultaOsComponent } from "./consultas/consulta-os/consulta-os.component";
import { ConsultaFuncionarioComponent } from "./consultas/consulta-funcionario/consulta-funcionario.component";
import { ConsultaEstoqueComponent } from "./consultas/consulta-estoque/consulta-estoque.component";
import { CadastroOsComponent } from "./cadastros/cadastro-os/cadastro-os.component";
import { CadastroFuncionarioComponent } from "./cadastros/cadastro-funcionario/cadastro-funcionario.component";
import { CadastroEstoqueComponent } from "./cadastros/cadastro-estoque/cadastro-estoque.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
} from "@angular/material";
import { PainelDeControleComponent } from "./painel-de-controle/painel-de-controle.component";
import { MatMenuModule } from "@angular/material/menu";
import { ConsultasComponent } from "./consultas/consultas.component";
import { CadastrosComponent } from "./cadastros/cadastros.component";
import { HttpClientModule } from "@angular/common/http";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { NgxMaskModule } from "ngx-mask";
import { SimpleNotificationsModule } from "angular2-notifications";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelDeControleComponent,
    ConsultasComponent,
    CadastrosComponent,
    CadastroEstoqueComponent,
    CadastroFuncionarioComponent,
    CadastroOsComponent,
    CadastroClienteComponent,
    CadastroVeiculoComponent,
    ConsultaEstoqueComponent,
    ConsultaFuncionarioComponent,
    ConsultaOsComponent,
    ConsultaClienteComponent,
    ConsultaVeiculoComponent,
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
    FormlyModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(),
    CommonModule,
    FormlyBootstrapModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
