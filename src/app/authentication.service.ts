import { Injectable } from '@angular/core';
import { Connection } from './connection';

@Injectable()
export class AuthService {
  user: Connection;
  auth(login: string, pass: string): any {
    if (this.user.auxane.email === login && this.user.auxane.password === pass) {
     return 1;
    }
    return 0;
  }
}
