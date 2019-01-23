import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaProviderLoginComponent } from './idea-provider-login.component';

describe('IdeaProviderLoginComponent', () => {
  let component: IdeaProviderLoginComponent;
  let fixture: ComponentFixture<IdeaProviderLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaProviderLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaProviderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
