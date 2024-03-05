import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/hourly-charge-calculator/hourly-charge-calculator.module').then(mod => mod.HourlyChargeCalculatorModule) },
  { path: '', loadChildren: () => import('./components/time-difference-calculator/time-difference-calculator.module').then(mod => mod.TimeDifferenceCalculatorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
