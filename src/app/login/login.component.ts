import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

 loginForm = this.fb.group({
    username: [null],
    password: [null]
  });
  onSubmit() {

    console.log(this.loginForm.value)

      if(this.loginForm.valid){
        this.router.navigateByUrl('painel-de-controle')
      }

  }

  ngOnInit() {
  }

}
