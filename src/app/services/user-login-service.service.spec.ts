import { TestBed } from '@angular/core/testing';

import { UserLoginServiceService } from './user-login-service.service';

describe('UserLoginServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserLoginServiceService = TestBed.get(UserLoginServiceService);
    expect(service).toBeTruthy();
  });
});
