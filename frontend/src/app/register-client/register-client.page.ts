import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.page.html',
  styleUrls: ['./register-client.page.scss'],
})
export class RegisterClientPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public form = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: ""
  }

  print() {
    console.log(this.form)
  }

}
