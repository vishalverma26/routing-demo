import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-demo';
  loggedIn: boolean;
  constructor(private authService: AuthService) {
    this.authService.identify.subscribe(data => {
      this.loggedIn = data;
    })
  }

  toggleLogin() {
    if(this.loggedIn)
      this.authService.logout();
    else
      this.authService.login();
  }
}
