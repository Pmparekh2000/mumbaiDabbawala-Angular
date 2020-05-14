import { TestBed } from '@angular/core/testing';

import { TiffinmanApplicationService } from './tiffinman-application.service';

describe('TiffinmanApplicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiffinmanApplicationService = TestBed.get(TiffinmanApplicationService);
    expect(service).toBeTruthy();
  });
});
