import { TestBed } from '@angular/core/testing';

import { RegisterAsTeacherService } from './register-as-teacher.service';

describe('RegisterAsTeacherService', () => {
  let service: RegisterAsTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterAsTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
