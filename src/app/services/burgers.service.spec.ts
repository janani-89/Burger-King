import { TestBed, inject } from '@angular/core/testing';

import { BurgersService } from './burgers.service';

describe('BurgersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BurgersService]
    });
  });

  it('should be created', inject([BurgersService], (service: BurgersService) => {
    expect(service).toBeTruthy();
  }));
});
