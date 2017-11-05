import { TailLoggerComponent } from './tail-logger/tail-logger.component';
import { ErrorLoggerComponent } from './error-logger/error-logger.component';
import { DetailLoggerComponent } from './detail-logger/detail-logger.component';
import { LoggerComponent } from './logger.component';
import { Routes } from '@angular/router';
export const loggerRoutes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: LoggerComponent
}, {
    path: 'detail',
    component: DetailLoggerComponent
}, {
    path: 'error',
    component: ErrorLoggerComponent
}, {
    path: 'tail',
    component: TailLoggerComponent
}];