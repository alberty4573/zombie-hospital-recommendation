import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainGradingComponent } from './pain-grading.component';

describe('PainGradingComponent', () => {
  let component: PainGradingComponent;
  let fixture: ComponentFixture<PainGradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainGradingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainGradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
