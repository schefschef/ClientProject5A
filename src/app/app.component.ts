import { Component } from '@angular/core';
import { Connection } from './connection';
import { AuthService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  login = '';
  pass = '';
  log: Connection ;
  constructor(private authService: AuthService) { }
}



