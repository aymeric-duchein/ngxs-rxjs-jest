import {Injectable} from '@angular/core';
import {iif, Observable, of, throwError} from 'rxjs';
import {User} from '../core/user/user.model';
import {delay, mapTo} from 'rxjs/operators';

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

    return iif(() => username !== 'fake', of(username), throwError('fake user detected')).pipe(
      delay(500),
      mapTo(newUser)
    );
  }
}
