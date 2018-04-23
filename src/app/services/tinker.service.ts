import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, switchMap, toArray } from 'rxjs/internal/operators';

@Injectable()
export class TinkerService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('/api/characters/5')
      .pipe(
        pluck('fiveJson', 'game_indices'),
        switchMap((data: any) => data),
        pluck('version', 'name'),
        toArray()
      ).subscribe(data => console.log(data));
  }
}
