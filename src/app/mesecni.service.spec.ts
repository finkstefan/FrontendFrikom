import { TestBed } from '@angular/core/testing';

import { MesecniService } from './services/mesecni.service';

describe('MesecniService', () => {
  let service: MesecniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesecniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
