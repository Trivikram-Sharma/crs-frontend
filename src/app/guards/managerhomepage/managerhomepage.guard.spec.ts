import { TestBed } from '@angular/core/testing';

import { ManagerhomepageGuard } from './managerhomepage.guard';

describe('ManagerhomepageGuard', () => {
  let guard: ManagerhomepageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ManagerhomepageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
