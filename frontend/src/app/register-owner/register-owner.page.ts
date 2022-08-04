import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.page.html',
  styleUrls: ['./register-owner.page.scss'],
})
export class RegisterOwnerPage implements OnInit {

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
