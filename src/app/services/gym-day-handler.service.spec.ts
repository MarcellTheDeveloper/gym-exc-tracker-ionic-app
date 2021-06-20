import { TestBed } from '@angular/core/testing';

import { GymDayHandlerService } from './gym-day-handler.service';

describe('GymDayHandlerService', () => {
  let service: GymDayHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymDayHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
