import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDifferenceCalculatorComponent } from './time-difference-calculator.component';

describe('TimeDifferenceCalculatorComponent', () => {
  let component: TimeDifferenceCalculatorComponent;
  let fixture: ComponentFixture<TimeDifferenceCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeDifferenceCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeDifferenceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
