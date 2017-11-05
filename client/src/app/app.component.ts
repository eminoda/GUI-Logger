
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public subNavGroups = [{
    groupName: '日志',
    groupType: 1,
    subNavList: [{
      subNavName: '实时监控',
      subNavUrl: '/logger/detail'
    }, {
      subNavName: '异常告警',
      subNavUrl: '/logger/error'
    }, {
      subNavName: '日志输出',
      subNavUrl: '/logger/tail'
    }]
  }, {
    groupName: '设置',
    groupType: 2,
    subNavList: [{
      subNavName: '系统设置',
      subNavUrl: '/setting/system'
    }, {
      subNavName: '个人设置',
      subNavUrl: '/setting/user'
    }]
  }]

  constructor(
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.activeRouter.url);
  }

  chooseSubNav() {
    console.log(123)
  }
}
