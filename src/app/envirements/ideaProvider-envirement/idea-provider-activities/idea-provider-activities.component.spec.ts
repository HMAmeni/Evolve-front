import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaProviderActivitiesComponent } from './idea-provider-activities.component';

describe('IdeaProviderActivitiesComponent', () => {
  let component: IdeaProviderActivitiesComponent;
  let fixture: ComponentFixture<IdeaProviderActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaProviderActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaProviderActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
