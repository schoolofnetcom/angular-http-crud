import { TestBed } from '@angular/core/testing';

import { ModalRefService } from './modal-ref.service';

describe('ModalRefService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalRefService = TestBed.get(ModalRefService);
    expect(service).toBeTruthy();
  });
});
