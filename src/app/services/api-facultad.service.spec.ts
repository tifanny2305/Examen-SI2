import { TestBed } from '@angular/core/testing';

import { ApiFacultadService } from './api-facultad.service';

describe('ApiFacultadService', () => {
  let service: ApiFacultadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFacultadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
