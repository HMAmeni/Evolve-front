import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerRegistrationComponent } from './former-registration.component';

describe('FormerRegistrationComponent', () => {
  let component: FormerRegistrationComponent;
  let fixture: ComponentFixture<FormerRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormerRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
