import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {UserResponse, UserService} from "./user/user.service";

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  // store the logged user
  loggedUser: UserResponse = null;

  // form parameters
  credentials = {username: '', password: ''};

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  login() {
    this.authService.authenticate(this.credentials, () => {
      this.refreshLoggedUser();
    });
    return true;
  }

  logout() {
    this.authService.logout(() => {
      this.loggedUser = null;
    });
    return true;
  }

  ngOnInit(): void {
    this.refreshLoggedUser();
  }

  refreshLoggedUser() {
    this.userService.current((user) => {
      this.loggedUser = user;
    })
  }
}
