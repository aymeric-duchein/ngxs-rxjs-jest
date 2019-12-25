import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs';
import {fakeJsonUrl} from '../issue/issue.data';

export const FAKE_JSON_TOKEN = 'l1Fx3-DeGDyFZKyt3lRCJg';

@Injectable()
export class FakeJsonInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === fakeJsonUrl) {
      req = req.clone({
        body: {...req.body, token: FAKE_JSON_TOKEN}
      });
    }
    return next.handle(req);
  }
}
