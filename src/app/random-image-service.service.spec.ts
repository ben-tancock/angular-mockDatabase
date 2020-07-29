import { TestBed } from '@angular/core/testing';

import { RandomImageServiceService } from './random-image-service.service';

describe('RandomImageServiceService', () => {
  let service: RandomImageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomImageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
