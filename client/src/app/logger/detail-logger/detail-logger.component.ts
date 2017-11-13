import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import { SocketIoService } from './../../socket-io/socket-io.service';
import { Component, OnInit, OnChanges, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-detail-logger',
  templateUrl: './detail-logger.component.html',
  styleUrls: ['./detail-logger.component.scss']
})
export class DetailLoggerComponent implements OnInit, OnDestroy {

  public cpus = [];
  public newCpus: any[] = [];
  public heaps = {
    rss: [],
    heapTotal: [],
    heapUsed: []
  };
  public echartCpuOption;
  public echartHeapOption;
  private socketListen;
  private socketHeapListen;
  constructor(
    private socketIoService: SocketIoService
  ) {
    this.echartCpuOption = {
      title: {
        text: 'cpu'
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
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: 'cpu',
          type: 'line',
          hoverAnimation: true,
          data: [
          ]
        }
      ]
    };
    // rss(进程常驻内存)
    // heapTotal(总堆内存)
    // heapUsed(已使用堆内存)
    this.echartHeapOption = {
      title: {
        text: '堆内存(MB)'
      },
      legend: {
        data: ['rss', 'heapTotal', 'heapUsed']
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
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: 'rss',
          type: 'line',
          hoverAnimation: true,
          data: [
          ]
        },
        {
          name: 'heapTotal',
          type: 'line',
          hoverAnimation: true,
          data: [
          ]
        }, {
          name: 'heapUsed',
          type: 'line',
          hoverAnimation: true,
          data: [
          ]
        }
      ]
    };
  }

  ngOnInit() {
    this.socketListen = this.socketIoService.listenSocket('c-cpuStatus')
      .debounceTime(800)
      .subscribe((cpuInfo) => {
        // console.log(cpuInfo);
        if (this.cpus.length > 10) {
          this.cpus.shift();
        }
        this.cpus.push([cpuInfo.date, cpuInfo.cpu]);
        this.echartCpuOption = {
          series: [{
            data: this.cpus
          }]
        };
      });

    this.socketHeapListen = this.socketIoService.listenSocket('c-heapStatus')
      .debounceTime(800)
      .subscribe((heapInfo) => {
        if (this.heaps.rss.length > 10) {
          this.heaps.rss.shift();
          this.heaps.heapTotal.shift();
          this.heaps.heapUsed.shift();
        }
        this.heaps.rss.push([heapInfo.date, heapInfo.heap.rss]);
        this.heaps.heapTotal.push([heapInfo.date, heapInfo.heap.heapTotal]);
        this.heaps.heapUsed.push([heapInfo.date, heapInfo.heap.heapUsed]);
        this.echartHeapOption = {
          series: [{
            data: this.heaps.rss
          }, {
            data: this.heaps.heapTotal
          }, {
            data: this.heaps.heapUsed
          }]
        };
      });

    this.socketIoService.emitSocket('s-cpuStatus');
    this.socketIoService.emitSocket('s-heapStatus');
  }

  ngOnDestroy() {
    this.socketListen.unsubscribe();
    this.socketHeapListen.unsubscribe();
  }
}
