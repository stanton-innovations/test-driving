import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap, tap } from 'rxjs/internal/operators';

import * as characters from '../api/json/characters.json';

@Injectable()
export class FakeBackendInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(
      mergeMap(() => {

        if (request.url.endsWith('/api/characters') && request.method === 'GET') {
          return of(new HttpResponse({status: 200, body: characters}));
        }

        if (request.url.match(/\/api\/characters\/\d+$/) && request.method === 'GET') {
          // find user by id in users array
          const urlParts = request.url.split('/');
          const id = parseInt(urlParts[urlParts.length - 1]);
          const matchedCharacters = characters.results.filter(item => item.id === id);
          const character = matchedCharacters.length ? matchedCharacters[0] : null;

          return of(new HttpResponse({ status: 200, body: character }));
        }
        return next.handle(request);
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
