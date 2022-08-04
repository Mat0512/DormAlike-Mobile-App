import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-owner',
  templateUrl: './login-owner.page.html',
  styleUrls: ['./login-owner.page.scss'],
})
export class LoginOwnerPage implements OnInit {

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
