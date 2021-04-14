import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainGradingComponent } from './pain-grading.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PainGradingComponent', () => {
  let component: PainGradingComponent;
  let fixture: ComponentFixture<PainGradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainGradingComponent ],
      imports:[HttpClientModule,
      RouterTestingModule]
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
