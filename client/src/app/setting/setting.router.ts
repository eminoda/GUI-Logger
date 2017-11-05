import { UserSettingComponent } from './user-setting/user-setting.component';
import { SystemSettingComponent } from './system-setting/system-setting.component';
import { Routes } from '@angular/router';
import { SettingComponent } from './setting.component';
export const settingRoutes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: SettingComponent
}, {
    path: 'system',
    component: SystemSettingComponent
}, {
    path: 'user',
    component: UserSettingComponent
}];