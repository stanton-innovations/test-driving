import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap, tap } from 'rxjs/internal/operators';

import * as characters from '../api/json/characters.json';

@Injectable()
export class FakeBackendInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(
      mergeMap(() => {
        if (request.url.endsWith('/api/characters') && request.method === 'GET') {
          return of(new HttpResponse({status: 200, body: characters}));
        }
        return [];
      }),
      // tap(data => console.log(data)),
      materialize(),
      delay(500),
      dematerialize()
    );
  }
}
export let FakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptorService,
  multi: true
};
