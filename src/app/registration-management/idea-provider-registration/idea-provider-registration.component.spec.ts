import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaProviderRegistrationComponent } from './idea-provider-registration.component';

describe('IdeaProviderRegistrationComponent', () => {
  let component: IdeaProviderRegistrationComponent;
  let fixture: ComponentFixture<IdeaProviderRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaProviderRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaProviderRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
