import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalSuggestionComponent } from './hospital-suggestion.component';

describe('HospitalSuggestionComponent', () => {
  let component: HospitalSuggestionComponent;
  let fixture: ComponentFixture<HospitalSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
