import { BrowserModule} from "@angular/platform-browser";
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelDeControleComponent,
    ConsultasComponent,
    CadastrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatInputModule,
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
