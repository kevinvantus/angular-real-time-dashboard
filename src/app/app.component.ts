import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { provideEcharts } from 'ngx-echarts';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'rtd-root',
  imports: [CommonModule, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [provideEcharts()],
})
export class AppComponent {}
