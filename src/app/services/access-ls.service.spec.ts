import { TestBed } from '@angular/core/testing';

import { AccessLsService } from './access-ls.service';

describe('AccessLsService', () => {
  let service: AccessLsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessLsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
