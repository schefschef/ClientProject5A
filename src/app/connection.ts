import { User, Contact } from './user';

export class Connection {
  connected: any = 0;
  jean: Contact = {pseudo: 'jean'};
  pierre: Contact = {pseudo: 'pierre'};

  auxane: User = {
    email: 'auxane',
    password: '1234',
    pseudo: '4ux4ne',
    picture: '../assets/profilpic.jpg',
    phrase: 'Je me kiffe',
    contacts: [this.jean, this.pierre]
  };


}
