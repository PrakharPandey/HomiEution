import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsStudentComponent } from './register-as-student.component';

describe('RegisterAsStudentComponent', () => {
  let component: RegisterAsStudentComponent;
  let fixture: ComponentFixture<RegisterAsStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAsStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
