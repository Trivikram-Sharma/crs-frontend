import { TestBed } from '@angular/core/testing';

import { AdminhomepageGuard } from './adminhomepage.guard';

describe('AdminhomepageGuard', () => {
  let guard: AdminhomepageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminhomepageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
