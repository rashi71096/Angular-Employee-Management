import { TestBed } from '@angular/core/testing';

import { ServicesemployeeserviceService } from './servicesemployeeservice.service';

describe('ServicesemployeeserviceService', () => {
  let service: ServicesemployeeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesemployeeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
