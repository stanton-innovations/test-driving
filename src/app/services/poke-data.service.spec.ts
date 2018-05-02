import { TestBed, inject } from '@angular/core/testing';

import { PokeDataService } from './poke-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PokeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [PokeDataService]
    });
  });

  it('should be created', inject([PokeDataService], (service: PokeDataService) => {
    expect(service).toBeTruthy();
  }));
});
