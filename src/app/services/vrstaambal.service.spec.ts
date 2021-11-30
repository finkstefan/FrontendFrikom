import { TestBed } from '@angular/core/testing';

import { VrstaambalService } from './vrstaambal.service';

describe('VrstaambalService', () => {
  let service: VrstaambalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VrstaambalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
