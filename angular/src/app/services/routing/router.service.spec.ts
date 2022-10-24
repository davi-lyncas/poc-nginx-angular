import { TestBed } from '@angular/core/testing';

import { Router } from './router.service';

describe('RouterService', () => {
  let service: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
