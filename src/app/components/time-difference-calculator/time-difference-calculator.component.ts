import { Component } from '@angular/core';

@Component({
  selector: 'app-time-difference-calculator',
  templateUrl: './time-difference-calculator.component.html',
  styleUrl: './time-difference-calculator.component.scss'
})
export class TimeDifferenceCalculatorComponent {
  startTime: string = "";
  endTime: string = "";
  result: string = "";

  calculateDifference(): void {
    const start = new Date("2000-01-01 " + this.startTime);
    const end = new Date("2000-01-01 " + this.endTime);

    // If end time is earlier than start time, adjust date for end time
    if (end < start) {
      end.setDate(end.getDate() + 1); // Add 1 day
    }

    const diffInMs = end.getTime() - start.getTime();

    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;

    this.result = hours + " hours " + minutes + " minutes";
  }
}
