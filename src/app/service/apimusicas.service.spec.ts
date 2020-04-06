import { TestBed } from '@angular/core/testing';

import { ApimusicasService } from './apimusicas.service';

describe('ApimusicasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApimusicasService = TestBed.get(ApimusicasService);
    expect(service).toBeTruthy();
  });
});
