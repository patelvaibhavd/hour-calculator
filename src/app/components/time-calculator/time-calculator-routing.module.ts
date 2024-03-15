import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeCalculatorComponent } from './time-calculator.component';

const routes: Routes = [
  { path: 'time-calculator', component: TimeCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeCalculatorRoutingModule { }
