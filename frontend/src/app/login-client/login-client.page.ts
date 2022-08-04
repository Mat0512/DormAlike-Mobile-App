import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.page.html',
  styleUrls: ['./login-client.page.scss'],
})
export class LoginClientPage implements OnInit {

  username: string = "";
  password: string = "";
  constructor(private userService : UserService, private router : Router) { }

  submitCredentials(): void {
    
    this.userService.authenticateUser({username: this.username, password: this.password}).subscribe((userData) => {
      this.router.navigate(['/home-client'], userData)
    })

    this.username = ""
    this.password = ""

  }

  ngOnInit() {

  }
}
