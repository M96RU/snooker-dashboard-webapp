import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  current(callback) {
    this.http.get<UserResponse>("/api/users/current")
      .subscribe(callback);
  }
}

export class UserResponse {
  public username: string;
}
