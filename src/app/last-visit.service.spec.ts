import { TestBed } from '@angular/core/testing';

import { LastVisitService } from './last-visit.service';

describe('LastVisitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastVisitService = TestBed.get(LastVisitService);
    expect(service).toBeTruthy();
  });
});
