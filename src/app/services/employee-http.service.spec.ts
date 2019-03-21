import { TestBed } from '@angular/core/testing';

import { EmployeeHttpService } from './employee-http.service';

describe('EmployeeHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeHttpService = TestBed.get(EmployeeHttpService);
    expect(service).toBeTruthy();
  });
});
