import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../core/user/user.model';

@Injectable()
export class LoginService {

  constructor() {
  }

  signIn(username: string, password: string): Observable<User> {
    const newUser: User = {
      name: username,
      avatarUrl: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043232-avatar-batman-comics-hero_113278.png',
      notifications: true
    };
    return null;
  }
}
