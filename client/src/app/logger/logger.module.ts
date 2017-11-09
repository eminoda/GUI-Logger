import { SharedModule } from './../appGlobal/shared.module';
import { EchartDirective } from './../appGlobal/directive/echart.directive';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { loggerRoutes } from './logger.router';
import { RouterModule } from '@angular/router';
import { LoggerComponent } from './logger.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailLoggerComponent } from './detail-logger/detail-logger.component';
import { ErrorLoggerComponent } from './error-logger/error-logger.component';
import { TailLoggerComponent } from './tail-logger/tail-logger.component';

@NgModule({
  declarations: [
    LoggerComponent,
    DetailLoggerComponent,
    ErrorLoggerComponent,
    TailLoggerComponent
  ],
  imports: [
    SharedModule,
    NgZorroAntdModule,
    RouterModule.forChild(loggerRoutes)
  ]
})
export class LoggerModule { }
