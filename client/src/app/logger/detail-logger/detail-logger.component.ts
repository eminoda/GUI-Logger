import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-logger',
  templateUrl: './detail-logger.component.html',
  styleUrls: ['./detail-logger.component.scss']
})
export class DetailLoggerComponent implements OnInit {

  private data = [];
  private echartOption1 = {
    title: {
      text: '动态数据 + 时间坐标轴'
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        params = params[0];
        const date = new Date(params.name);
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
      },
      axisPointer: {
        animation: false
      }
    },
    xAxis: {
      type: 'time',
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      }
    },
    series: [{
      name: '模拟数据',
      type: 'line',
      showSymbol: false,
      hoverAnimation: false,
      data: this.data
    }]
  };

  constructor() { }

  ngOnInit() {
    console.log(this.echartOption1);
    for (let i = 0; i < 1000; i++) {
      this.data.push({
        name: Math.random() * 21,
        value: [1, 2, 3]
      });
    }
  }
}
