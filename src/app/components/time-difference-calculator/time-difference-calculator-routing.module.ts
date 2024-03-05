import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeDifferenceCalculatorComponent } from './time-difference-calculator.component';

const routes: Routes = [
  { path: 'time-difference-calculator', component: TimeDifferenceCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeDifferenceCalculatorRoutingModule { }
