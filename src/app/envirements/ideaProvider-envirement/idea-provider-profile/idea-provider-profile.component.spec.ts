import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaProviderProfileComponent } from './idea-provider-profile.component';

describe('IdeaProviderProfileComponent', () => {
  let component: IdeaProviderProfileComponent;
  let fixture: ComponentFixture<IdeaProviderProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaProviderProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaProviderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
