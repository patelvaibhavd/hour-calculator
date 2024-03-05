import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HourlyChargeCalculatorComponent } from './hourly-charge-calculator.component';

const routes: Routes = [
  { path: 'hourly-charge-calculator', component: HourlyChargeCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HourlyChargeCalculatorRoutingModule { }
