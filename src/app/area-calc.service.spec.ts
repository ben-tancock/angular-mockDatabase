import { TestBed } from '@angular/core/testing';

import { AreaCalcService } from './area-calc.service';

describe('AreaCalcService', () => {
  let service: AreaCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
