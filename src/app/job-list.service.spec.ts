import { TestBed, inject } from '@angular/core/testing';

import { JobListService } from './job-list.service';

describe('JobListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobListService]
    });
  });

  it('should be created', inject([JobListService], (service: JobListService) => {
    expect(service).toBeTruthy();
  }));
});
