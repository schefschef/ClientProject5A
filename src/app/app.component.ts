import { Component } from '@angular/core';
import { AuthService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/materialize.css', '../assets/css/main.css'],
  providers: [AuthService]
})
export class AppComponent {
  email = '';
  pass = '';
  constructor(private authService: AuthService) { }
}



