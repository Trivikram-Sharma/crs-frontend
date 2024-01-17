import { TestBed } from '@angular/core/testing';

import { CustomerhomepageGuard } from './customerhomepage.guard';

describe('CustomerhomepageGuard', () => {
  let guard: CustomerhomepageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomerhomepageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
