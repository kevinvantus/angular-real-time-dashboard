import type { EChartsOption } from 'echarts';

export const initChartOptions = (
  data: number[],
  time: string[],
  lineType: 'line' | 'bar' = 'line'
): EChartsOption => {
  return {
    color: lineType === 'line' ? ['#FF9800'] : ['#4A90E2'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: time,
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Price (BTC/USDT)',
        type: lineType,
        data,
      },
    ],
  };
};
