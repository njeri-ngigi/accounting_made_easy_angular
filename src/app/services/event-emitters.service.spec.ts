import { TestBed } from '@angular/core/testing';

import { EventEmittersService } from './event-emitters.service';

describe('EventEmittersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventEmittersService = TestBed.get(EventEmittersService);
    expect(service).toBeTruthy();
  });
});
