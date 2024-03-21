import { Component } from '@angular/core';
interface TimeRow {
  sign: string;
  time: string;
  seconds: number;
  formattedTime: string;
}
@Component({
  selector: 'app-time-calculator',
  templateUrl: './time-calculator.component.html',
  styleUrl: './time-calculator.component.scss'
})
export class TimeCalculatorComponent {

  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  time: string = '00:00:00';
  rows: TimeRow[] = [{ sign: '+', time: '00:00:00', seconds: 0, formattedTime: '0 h 0 min 0 sec' }];

  constructor() { }

  ngOnInit(): void {
    this.calculateTotalTime();
  }

  calculateTotalTime(): void {
    // let totalSeconds = 0;
    // for (const row of this.rows) {
    //   if (row.sign === '+') {
    //     totalSeconds += row.seconds;
    //   } else {
    //     totalSeconds -= row.seconds;
    //   }
    // }

    // // Convert total seconds to hours, minutes, and remaining seconds
    // const hours = Math.floor(totalSeconds / 3600);
    // const remainingSecondsAfterHours = totalSeconds % 3600;
    // const minutes = Math.floor(remainingSecondsAfterHours / 60);
    // const seconds = remainingSecondsAfterHours % 60;

    // this.hours = hours;
    // this.minutes = minutes;
    // this.seconds = seconds;
    // this.time = this.formatTime(hours, minutes, seconds);

    let totalSeconds = 0;
    for (const row of this.rows) {
      if (row.sign === '+') {
        totalSeconds += row.seconds;
      } else {
        totalSeconds -= row.seconds;
      }
    }

    // Convert total seconds to hours, minutes, and remaining seconds
    const hours = Math.floor(totalSeconds / 3600);
    const remainingSecondsAfterHours = totalSeconds % 3600;
    const minutes = Math.floor(remainingSecondsAfterHours / 60);
    const seconds = remainingSecondsAfterHours % 60;
    this.time = this.formatTime(hours, minutes, seconds);

    // Adjust minutes and seconds to reflect hours
    const adjustedMinutes = minutes + hours * 60;
    const adjustedSeconds = seconds + hours * 3600 + minutes * 60;

    this.hours = hours;
    this.minutes = adjustedMinutes;
    this.seconds = adjustedSeconds;
  }


  formatTime(hours: number, minutes: number, seconds: number): string {
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  addRow(sign: string): void {
    if (this.rows.length >= 50) {
      alert('Too many input fields');
      return;
    }
    this.rows.push({ sign: sign, time: '00:00:00', seconds: 0, formattedTime: '0 h 0 min 0 sec' });
  }

  deleteRow(index: number): void {
    if (this.rows.length > 1) {
      this.rows.splice(index, 1);
      this.calculateTotalTime();
    }
  }

  changeSign(index: number): void {
    this.rows[index].sign = this.rows[index].sign === '+' ? '-' : '+';
    this.calculateTotalTime();
  }

  calculateTime(index: number): void {
    const parts = this.rows[index].time.split(':');
    let hours = parseInt(parts[0]);
    let minutes = parseInt(parts[1]);
    let seconds = parseInt(parts[2]);
    if (isNaN(hours)) hours = 0;
    if (isNaN(minutes)) minutes = 0;
    if (isNaN(seconds)) seconds = 0;
    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    this.rows[index].seconds = totalSeconds;
    this.rows[index].formattedTime = `${hours} h ${minutes} min ${seconds} sec`;
    this.calculateTotalTime();
  }

  reset(): void {
    this.rows = [{ sign: '+', time: '00:00:00', seconds: 0, formattedTime: '0 h 0 min 0 sec' }];
    this.calculateTotalTime();
  }
}
