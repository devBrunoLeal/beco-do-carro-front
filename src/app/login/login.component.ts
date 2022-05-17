import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}

  loginForm = this.fb.group({
    username: [null],
    password: [null],
  });
  onSubmit() {
    if (this.loginForm.valid) {
      this.apiService.login(this.loginForm.value).subscribe(
        (res) => {},
        (res) => {
          if (res.status == 200) {
            console.log(res);
            this.router.navigateByUrl("painel-de-controle");
          }else{
            alert("Usuario ou senha incorretos!");
          }

        }
      );
    }
  }

  ngOnInit() {}
}
