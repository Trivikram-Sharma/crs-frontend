import { TestBed } from '@angular/core/testing';

import { EngineerhomepageGuard } from './engineerhomepage.guard';

describe('EngineerhomepageGuard', () => {
  let guard: EngineerhomepageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EngineerhomepageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
