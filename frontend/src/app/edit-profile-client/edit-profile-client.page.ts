import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile-client',
  templateUrl: './edit-profile-client.page.html',
  styleUrls: ['./edit-profile-client.page.scss'],
})
export class EditProfileClientPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public form = {
    firstname: "",
    lastname: "",
    username: "",
    contactnumber: "",
    email: "",
    password: "",
  }

  print() {
    console.log(this.form)
  }

}
