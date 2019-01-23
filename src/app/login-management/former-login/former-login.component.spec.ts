import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerLoginComponent } from './former-login.component';

describe('FormerLoginComponent', () => {
  let component: FormerLoginComponent;
  let fixture: ComponentFixture<FormerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
