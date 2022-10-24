import { TestBed } from '@angular/core/testing';

import { Serializer } from './serializer.service';

describe('SerializerService', () => {
  let service: Serializer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serializer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
