import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class AuthService {
  auxane: User = {
    email: 'auxane',
    password: '1234',
    pseudo: '4ux4ne',
    picture: '../assets/profilpic.jpg',
    phrase: 'Je me kiffe',
  };

  auth(login: string, pass: string): any {
    if ( login === this.auxane.email  &&  pass  === this.auxane.password ) {
     return 1;
    }
  }
}
