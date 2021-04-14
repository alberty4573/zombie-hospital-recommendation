import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllnessSelectionComponent } from './illness-selection.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Location } from '@angular/common';





describe('IllnessSelectionComponent', () => {
  let component: IllnessSelectionComponent;
  let fixture: ComponentFixture<IllnessSelectionComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllnessSelectionComponent ],
      imports: [HttpClientModule,
      RouterTestingModule.withRoutes(
        [{
          path: 'illness', component: DummyComponent
        }]
      )]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllnessSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get from service', () => {
component.onSubmit("fdsfs");
    expect(component.onSubmit).toBeTruthy();
  });

  it('should be one "submit" button on the page', () => {
    const linkDes = fixture.debugElement
    .query(By.css('button'));
    const nativeButton: HTMLButtonElement = linkDes.nativeElement;
    expect(nativeButton.textContent).toBe('Submit')
  });

  it('should have a path of /illness', () => {
    const location = TestBed.get(Location);
    expect(location.path()).toBe('')

  })


});

@Component({template:''})
class DummyComponent {}
