import { TestBed } from '@angular/core/testing';

import { ProcessHttpMsgServiceService } from './process-http-msg-service.service';

describe('ProcessHttpMsgServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessHttpMsgServiceService = TestBed.get(ProcessHttpMsgServiceService);
    expect(service).toBeTruthy();
  });
});
