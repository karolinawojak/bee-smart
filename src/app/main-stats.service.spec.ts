import { TestBed } from '@angular/core/testing';

import { MainStatsService } from './main-stats.service';

describe('MainStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainStatsService = TestBed.get(MainStatsService);
    expect(service).toBeTruthy();
  });
});
