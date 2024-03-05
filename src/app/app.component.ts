import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hour-calculator';
  isCollapsed: boolean;

  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

  collapseNavMenu() {
    if (!this.isCollapsed) {
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
