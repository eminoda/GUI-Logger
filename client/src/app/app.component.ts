
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public sideType: number;

  public subNavGroups = [{
    name: '日志',
    type: 1,
    url: '/logger/detail',
    icon: 'file',
    subNavList: [{
      name: '实时监控',
      url: '/logger/detail',
      icon: 'area-chart'
    }, {
      name: '异常告警',
      url: '/logger/error',
      icon: 'frown'
    }, {
      name: '日志输出',
      url: '/logger/tail',
      icon: 'code-o'
    }]
  }, {
    name: '设置',
    type: 2,
    url: '/setting',
    icon: 'setting',
    subNavList: [{
      name: '系统设置',
      url: '/setting/system',
      icon: 'android-o'
    }, {
      name: '个人设置',
      url: '/setting/user',
      icon: 'user'
    }]
  }];

  constructor(
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  chooseSubNav(sideType) {
    console.log(sideType);
    this.sideType = sideType;
  }
}
