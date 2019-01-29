import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerProfileComponent } from './former-profile.component';

describe('FormerProfileComponent', () => {
  let component: FormerProfileComponent;
  let fixture: ComponentFixture<FormerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
