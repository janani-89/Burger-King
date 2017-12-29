import { TestBed, inject } from '@angular/core/testing';

import { List.ServiceService } from './list.service.service';

describe('List.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [List.ServiceService]
    });
  });

  it('should be created', inject([List.ServiceService], (service: List.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
