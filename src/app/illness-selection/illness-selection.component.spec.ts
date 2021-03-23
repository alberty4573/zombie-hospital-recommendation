import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllnessSelectionComponent } from './illness-selection.component';

describe('IllnessSelectionComponent', () => {
  let component: IllnessSelectionComponent;
  let fixture: ComponentFixture<IllnessSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllnessSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllnessSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
