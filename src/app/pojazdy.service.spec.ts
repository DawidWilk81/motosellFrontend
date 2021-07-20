import { TestBed } from '@angular/core/testing';

import { PojazdyService } from './pojazdy.service';

describe('PojazdyService', () => {
  let service: PojazdyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PojazdyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
