import { TestBed } from '@angular/core/testing';

import { JedmereService } from './jedmere.service';

describe('JedmereService', () => {
  let service: JedmereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JedmereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
