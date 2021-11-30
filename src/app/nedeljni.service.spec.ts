import { TestBed } from '@angular/core/testing';

import { NedeljniService } from './services/nedeljni.service';

describe('NedeljniService', () => {
  let service: NedeljniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NedeljniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
