import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNewModalComponent } from './employee-new-modal.component';

describe('EmployeeNewModalComponent', () => {
  let component: EmployeeNewModalComponent;
  let fixture: ComponentFixture<EmployeeNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
