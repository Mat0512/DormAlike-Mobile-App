import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.page.html',
  styleUrls: ['./login-client.page.scss'],
})
export class LoginClientPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public form = {
    username: "",
    password: "",
  }

  print() {
    console.log(this.form)
  }

}
