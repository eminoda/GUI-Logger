import { SocketIoService } from './../../socket-io/socket-io.service';
import { Component, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-detail-logger',
  templateUrl: './detail-logger.component.html',
  styleUrls: ['./detail-logger.component.scss']
})
export class DetailLoggerComponent implements OnInit, OnChanges {

  public cpus = [];
  public echartOption;
  private socketListen;
  constructor(
    private socketIoService: SocketIoService
  ) { }

  ngOnInit() {
    this.echartOption = {
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
          name: 'cpu',
          type: 'line',
          hoverAnimation: true,
          data: []
        }
      ]
    };
    this.socketListen = this.socketIoService.listenSocket('c-cpuStatus').subscribe((cpuInfo) => {
      console.log(this.cpus);
      this.cpus.push([cpuInfo.date, cpuInfo.cpu]);
      this.echartOption = {
        series: [{
          data: this.cpus
        }]
      };
    });
    this.socketIoService.emitSocket('s-cpuStatus');
  }

  public ngOnChanges(): void {
    // if (this.cpus) {
    //   this.echartOption.series[0].data = this.cpus;
    // }
  }
}
