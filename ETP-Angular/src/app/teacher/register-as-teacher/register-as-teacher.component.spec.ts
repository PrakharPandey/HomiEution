import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsTeacherComponent } from './register-as-teacher.component';

describe('RegisterAsTeacherComponent', () => {
  let component: RegisterAsTeacherComponent;
  let fixture: ComponentFixture<RegisterAsTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAsTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAsTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
