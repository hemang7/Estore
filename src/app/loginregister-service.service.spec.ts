import { TestBed } from '@angular/core/testing';

import { LoginregisterServiceService } from './loginregister-service.service';

describe('LoginregisterServiceService', () => {
  let service: LoginregisterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginregisterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
