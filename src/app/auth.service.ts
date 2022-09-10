import { EventEmitter } from "@angular/core";

export class AuthService {
  identify: EventEmitter<boolean> = new EventEmitter();
  loggedIn = false;

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      });
    });
  }

  login() {
    this.loggedIn = true;
    this.identify.emit(this.loggedIn);
  }

  logout() {
    this.loggedIn = false;
    this.identify.emit(this.loggedIn);
  }
}
