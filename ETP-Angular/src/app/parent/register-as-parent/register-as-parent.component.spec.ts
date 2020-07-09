import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsParentComponent } from './register-as-parent.component';

describe('RegisterAsParentComponent', () => {
  let component: RegisterAsParentComponent;
  let fixture: ComponentFixture<RegisterAsParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAsParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
