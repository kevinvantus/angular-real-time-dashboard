import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import { map } from 'rxjs';
import { initChartOptions } from '../../data';
import { TradeResponse } from '../../models';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'rtd-dashboard',
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit, OnDestroy {
  options!: EChartsOption;
  volumeOptions!: EChartsOption;

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.getTopGainersAndLosers();
  }

  getTopGainersAndLosers() {
    this.chartService
      .getSocketSubject()
      .pipe(map((res) => (res as TradeResponse).data))
      .subscribe({
        next: (data) => {
          if (data) {
            const times = data.map((d) => new Date(d.t).toLocaleTimeString());
            const prices = data.map((d) => d.p);
            const volumes = data.map((d) => d.v);
            this.options = initChartOptions(prices, times, 'bar');
            this.volumeOptions = initChartOptions(volumes, times);
          }
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  ngOnDestroy(): void {
    this.chartService.getSocketSubject().unsubscribe();
  }
}
