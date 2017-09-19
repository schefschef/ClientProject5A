import { Component } from '@angular/core';
import { Connection } from './connection';
import { AuthService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/materialize.css', '../assets/css/main.css'],
  providers: [AuthService]
})
export class AppComponent {
  login = '';
  pass = '';
  log: Connection ;
  constructor(private authService: AuthService) { }
}

  onConnect(): any {
    this.connected = this.login ;
    if (this.authService.auth(this.login, this.pass) === 1) {
      this.connected = 'connected';
    }
    if (this.authService.auth(this.login, this.pass) === 0) {
      this.connected = 'wrong credential';
    }
  }
}

