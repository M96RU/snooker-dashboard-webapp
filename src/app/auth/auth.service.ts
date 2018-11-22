import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {

    this.http.post<LoginResponse>("/api/login", credentials)
      .subscribe(response => {
        localStorage.setItem("token", response.token);
        callback();
      }, error => {
        alert("Wrong Credentials");
      });
  }

  logout(callback) {
    localStorage.removeItem("token");
    callback();
  }
}

class LoginResponse {
  public username: string;
  public token: string;
}
