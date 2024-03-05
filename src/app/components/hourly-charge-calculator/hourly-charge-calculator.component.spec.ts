import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyChargeCalculatorComponent } from './hourly-charge-calculator.component';

describe('HourlyChargeCalculatorComponent', () => {
  let component: HourlyChargeCalculatorComponent;
  let fixture: ComponentFixture<HourlyChargeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourlyChargeCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HourlyChargeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
