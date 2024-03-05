import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-hourly-charge-calculator',
  templateUrl: './hourly-charge-calculator.component.html',
  styleUrl: './hourly-charge-calculator.component.scss'
})
export class HourlyChargeCalculatorComponent {
  hourlyRate: number = 0;
  days: number = 0;
  totalCharge: number = 0;
  inputTableData: { day: number, hours: number, minutes: number }[] = [];
  @ViewChild('printSection', { static: false }) printSection: ElementRef | any;

  addInputs(): void {
    this.inputTableData = [];
    for (let i = 1; i <= this.days; i++) {
      this.inputTableData.push({ day: i, hours: 0, minutes: 0 });
    }
  }

  calculateTotal(): void {
    this.totalCharge = 0;
    for (const input of this.inputTableData) {
      this.totalCharge += (input.hours + input.minutes / 60) * this.hourlyRate;
    }
  }

  printPdf(): void {
    const printContent = this.printSection.nativeElement;
    printContent.style.display = 'block';
    html2canvas(printContent).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('hourly_charge.pdf');
      printContent.style.display = 'none';
    }).catch(error => {
      console.error('Error generating PDF:', error);
      printContent.style.display = 'none';
    });
  }
}
