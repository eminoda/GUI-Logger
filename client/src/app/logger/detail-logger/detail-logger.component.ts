import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-logger',
  templateUrl: './detail-logger.component.html',
  styleUrls: ['./detail-logger.component.scss']
})
export class DetailLoggerComponent implements OnInit {

  private data = [];
  public echartOption1 = {
    title: {
      text: '服务器'
    },
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'time'
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410]
      }
    ]
  };



  constructor() { }

  ngOnInit() {
    console.log(this.echartOption1);
    setInterval(function () {
      for (let i = 0; i < 5; i++) {
        this.echartOption1.series[0].data.shift();
        this.echartOption1.series[0].data.push(Math.random() * 21 - 10);
      }
      this.echartOption1.series[0].data = 1;
    }, 1000);
  }
}
