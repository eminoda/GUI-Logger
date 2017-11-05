import { Routes } from '@angular/router';

export const appRoutes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadChildren: './logger/logger.module#LoggerModule'
}, {
    path: 'logger',
    loadChildren: './logger/logger.module#LoggerModule'
}, {
    path: 'setting',
    loadChildren: './setting/setting.module#SettingModule'
}];