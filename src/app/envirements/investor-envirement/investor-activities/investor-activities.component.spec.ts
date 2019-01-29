import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorActivitiesComponent } from './investor-activities.component';

describe('InvestorActivitiesComponent', () => {
  let component: InvestorActivitiesComponent;
  let fixture: ComponentFixture<InvestorActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
