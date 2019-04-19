import { TestBed, inject } from '@angular/core/testing';

import { NoticeServiceService } from './notice-service.service';

describe('NoticeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoticeServiceService]
    });
  });

  it('should be created', inject([NoticeServiceService], (service: NoticeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
