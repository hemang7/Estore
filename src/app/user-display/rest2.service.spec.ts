import { TestBed } from '@angular/core/testing';

import { Rest2Service } from './rest2.service';

describe('Rest2Service', () => {
  let service: Rest2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rest2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
