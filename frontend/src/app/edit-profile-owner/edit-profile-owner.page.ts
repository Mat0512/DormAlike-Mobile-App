import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile-owner',
  templateUrl: './edit-profile-owner.page.html',
  styleUrls: ['./edit-profile-owner.page.scss'],
})
export class EditProfileOwnerPage implements OnInit {

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
