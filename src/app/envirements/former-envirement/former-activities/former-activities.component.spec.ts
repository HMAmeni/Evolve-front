import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerActivitiesComponent } from './former-activities.component';

describe('FormerActivitiesComponent', () => {
  let component: FormerActivitiesComponent;
  let fixture: ComponentFixture<FormerActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormerActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
