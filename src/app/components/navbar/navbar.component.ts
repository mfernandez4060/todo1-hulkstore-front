import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.localAuthSetup();
  }

  isAuthenticated() {
    return this.auth.loggedIn;
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}


